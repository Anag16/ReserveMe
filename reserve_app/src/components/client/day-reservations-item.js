import React, { useState, useEffect } from "react";
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { CalendarCreateModal } from './calendarHelper';

export default function DayReservationItem(props) {
  const { store_id, store_name, store_capacity, user_id, dateString } = props;

  const [isLoading, setLoading] = useState(true);
  const [availableDays, setAvailableDays] = useState({});
  //before merge:  const [availableDays, setAvailableDays] = useState();
  const [modalState, setModalState] = useState({ openModal: false });
  const [selectorValue, setSelectorValue] = useState(new Date());
  const [remainingCapacity, setRemainingCapacity] = useState();

 const myAlert = withReactContent(Swal)

  const getReservations = function () {
    axios.get(`/api/reservations/${store_id}/`)
      .then(res => {
        if (res.status === 200) {
          let resultArray = [];
          let calendarObj = {};
          for (const obj of res.data) {
            //Display reservations JUST for specific user
            if (obj.user_id === Number(user_id)) {
              let startTime = new Date(obj.reservation_date);
              startTime.setHours(obj.start_hour);
              startTime.setMinutes(obj.start_minutes);
              let endTime = new Date(obj.reservation_date);
              endTime.setHours(obj.end_hour);
              endTime.setMinutes(obj.end_minutes);
              calendarObj = {
                title: `${store_name}`,
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
          }
          setAvailableDays(resultArray);
          setLoading(false);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire(
          'Error',
          'Please try again!',
          'error'
        );
      });
  }

  useEffect(() => {
    getReservations();
  }, [store_id]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const displayModal = function (date, store_id, capacity) {
    axios.get(`/api/reservations/${store_id}/${date.toISOString()}/${date.getHours()}/${date.getMinutes()}`)
      .then(res => {
        if (res.status === 200) {
          let count = res.data.length;
          console.log(capacity);
          if (count < capacity) {
            let remaining = capacity - count;
            setRemainingCapacity(remaining)
            setModalState({ openModal: true });
            setSelectorValue(date);
          }
          else {
            Swal.fire(
              'Oops',
              'We are full at that time. Try a different time.',
              'warning'
            );
          }

        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire(
          'Error',
          'Please try again!',
          'error'
        );
      });

    if (isLoading) {
      return <div className="App">Loading...</div>;
    }
  }

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
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonColor: 'blue',
  cancelButtonColor: 'red',
  confirmButtonText: 'Great!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  cancelButtonText:
    'Delete Reservation',
  cancelButtonAriaLabel: 'Thumbs down'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDismissed) {
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

  // modal states
  const handleOpenModal = (e) => {
    setModalState({ openModal: true });
    setSelectorValue(e.dateStr);
    displayModal(e.date, store_id, store_capacity)
  };

  const handleClose = (value) => {
    setModalState({ openModal: false });
    setSelectorValue(value.dateStr);
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{ center: 'timeGridWeek,timeGridDay' }}
        events={availableDays}
        eventClick={(e)=>handleReservationClick(e)}
        nowIndicator
        dateClick={(e) => handleOpenModal(e)}
        //  (e) => console.log(e.dateStr)
        height="auto"
        allDaySlot={false}
        slotMinTime="07:00:00"
        slotMaxTime="21:00:00"
        eventBackgroundColor="#6db2f7"
      />

      {/* Passing store_id and user_id as props to Modal (They are needed in axios request to create new reservation) */}
      <CalendarCreateModal {...modalState} onCloseModal={handleClose} value={selectorValue} setValue={setSelectorValue} store_id={store_id} user_id={user_id} getReservations={getReservations} store_name={store_name} remainingCapacity={remainingCapacity} />
    </>
  );
}