import { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { CalendarCreateModal } from './calendarHelper';

export default function Calendar(props) {
  const { store_id, user_id, dateString } = props;
  const [isLoading, setLoading] = useState(true);
  const [reservations, setReservations] = useState({})
  const [modalState, setModalState] = useState({ openModal: false });
  const [selectorValue, setSelectorValue] = useState(new Date());
  const [storeHours, setStoreHours] = useState({})
  const myAlert = withReactContent(Swal)

  const getStoreNameByReservationId = function (reservationObj, storesArray){
    let store_name = '';
    for (let i=0; i< storesArray.length; i++){
      if (reservationObj.store_id == storesArray[i].store_id){
        store_name = storesArray[i].name;
      }
    }
    return store_name;
  }

  const getReservations = function (){
    const axiosReq1 = axios.get(`/api/reservations`)
    const axiosReq2 = axios.get(`/api/stores`);
    axios.all([axiosReq1, axiosReq2])
      .then(res => {
        if (res[0].status === 200 && res[1].status) {
          let resultArray = [];
          let calendarObj = {};
          // for loop through reservation response data and extract values to remap
          for (const obj of res[0].data) {
            //Find store name from reservation store_id
            let store_name = getStoreNameByReservationId(obj, res[1].data);
            let startTime = new Date(obj.reservation_date);
            startTime.setHours(obj.start_hour);
            startTime.setMinutes(obj.start_minutes);

            let endTime = new Date(obj.reservation_date);
            endTime.setHours(obj.end_hour);
            endTime.setMinutes(obj.end_minutes);
            calendarObj = {
              title: store_name,
              start: startTime,
              end: endTime,
              reservation_id : obj.reservation_id,
              user_id : user_id,
              store_name : store_name,
              start_hour: obj.start_hour,
              start_minutes: obj.start_minutes,
              end_hour : obj.end_hour,
              end_minutes : obj.end_minutes,
              eventDate: startTime.toDateString()
            };
            resultArray.push(calendarObj);
          }
          setReservations(resultArray);
          setLoading(false);

          // grab opening and closing hours from stores - if displaying them to individual stores, iterate and put them as the slot min and max time for the calendar
          let hoursObj = {}
          for (const obj of res[1].data){
            const openHour = obj.opening_hour;
            const closingHour = obj.closing_hour;
            hoursObj = {
              // slotMinTime="07:00:00",
              // slotMaxTime="21:00:00"
              slotMinTime: `${openHour}:00:00`,
              slotMaxTime: `${closingHour}:00:00`
            }
          }
          setStoreHours(hoursObj);

        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error. Please try again');
      });
  }

  useEffect(() => {
    getReservations();
  }, []);


  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  // modal states
  const handleOpenModal = (e) => {
    setModalState({ openModal: true });
    setSelectorValue(e.date);
  };

  const handleClose = (value) => {
    setModalState({ openModal: false });
    setSelectorValue(value.dateStr);
  };
  const handleReservationClick = (e) =>{
    console.log(e.event.extendedProps);
    let myEvent = e.event.extendedProps;
    myAlert.fire({
      title: '<strong>RESERVATION DETAILS</strong>',
  icon: 'info',
  html:
    `<p>Place: ${myEvent.store_name}<p>
     <p>Date: ${myEvent.eventDate}<p>
     <p>From ${myEvent.start_hour}:${myEvent.start_minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} to ${myEvent.end_hour}:${myEvent.end_minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</p>`,
  showCloseButton: true,
  showDenyButton: true,
  focusConfirm: false,
  confirmButtonColor: 'blue',
  denyButtonColor: 'red',
  confirmButtonText: 'Great!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  denyButtonText:
    'Delete Reservation',
  declineButtonAriaLabel: 'Thumbs down'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        deleteReservation(myEvent, myEvent.reservation_id);
      }})
  }

  const deleteReservation = function(myEvent, reservation_id){
    myAlert.fire({
      title: '<strong>Are you sure you want to delete this reservation</strong>',
      icon: 'question',
      html:
        `<p>Place: ${myEvent.store_name}<p>
        <p>Date: ${myEvent.eventDate}<p>
        <p>From ${myEvent.start_hour}:${myEvent.start_minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} to ${myEvent.end_hour}:${myEvent.end_minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</p>`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonColor: 'red',
      cancelButtonColor: 'blue',
      confirmButtonText: 'Delete Reservation',
      cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            // Proceed to delete reservation.
            axios.delete(`/api/reservations/${reservation_id}/`)
            .then(res => {
              if (res.status === 200) {
                Swal.fire(res.data, '', 'success');
                getReservations(); //rerender the calendar.
              } else {
                const error = new Error(res.error);
                throw error;
              }
            })
            .catch(err => {
              console.error(err);
              Swal.fire('Error. Please try again', '', 'error')
            });
          } else if (result.isDismissed) {
            
          }})
  }

  return (
    <>
       <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{ center: 'timeGridWeek,timeGridDay' }}
        events={reservations}
        eventClick={(e)=>handleReservationClick(e)}
        nowIndicator
        // dateClick={(e) => handleOpenModal(e)}
        //  (e) => console.log(e.dateStr)
        height="auto"
        allDaySlot={false}
        //Not specified as this shows reseevations for all stores for the logged in user
        // slotMinTime={openClosingHours.opening}
        // slotMaxTime={openClosingHours.closing}
        eventBackgroundColor="#6db2f7"
      />
      {/* Passing store_id and user_id as props to Modal (They are needed in axios request to create new reservation) */}
      {/* REMOVED: NO OPTION TO CREATE RESERVATIONS FROM HERE */}
      {/* <CalendarCreateModal {...modalState} onCloseModal={handleClose} value={selectorValue} setValue={setSelectorValue} store_id={store_id} user_id={user_id} getReservations={getReservations} store_name={store_name} remainingCapacity={remainingCapacity} /> */}
    </>
  )

}