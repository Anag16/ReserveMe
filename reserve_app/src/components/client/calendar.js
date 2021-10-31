import { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from "axios";

import { CalendarCreateModal } from './calendarHelper';

export default function Calendar(props) {
  const { store_id, user_id, dateString } = props;
  const [isLoading, setLoading] = useState(true);
  const [reservations, setReservations] = useState({})
  const [modalState, setModalState] = useState({ openModal: false });
  const [selectorValue, setSelectorValue] = useState(new Date());
  const [storeHours, setStoreHours] = useState({})

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
            let startTime = new Date(obj.reservation_date);
            startTime.setHours(obj.start_hour);
            startTime.setMinutes(obj.start_minutes);

            let endTime = new Date(obj.reservation_date);
            endTime.setHours(obj.end_hour);
            endTime.setMinutes(obj.end_minutes);
            calendarObj = {
              title: "Booked slots",
              start: startTime,
              end: endTime,
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


  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{ center: 'dayGridMonth,timeGridWeek,timeGridDay' }}
        events={reservations}
        nowIndicator
        dateClick={(e) => handleOpenModal(e)}
        //  (e) => console.log(e.dateStr)
        height="auto"
        allDaySlot={false}
        slotMinTime="07:00:00"
        slotMaxTime="21:00:00"
        eventBackgroundColor="#6db2f7"
      />
      {/* <CalendarCreateModal {...modalState} onCloseModal={handleClose} value={selectorValue} setValue={setSelectorValue}/> */}
          {/* Passing store_id and user_id as props to Modal (They are needed in axios request to create new reservation) */}
    <CalendarCreateModal {...modalState} onCloseModal={handleClose} value={selectorValue} setValue={setSelectorValue} store_id = {store_id} user_id = {user_id} getReservations = {getReservations}/>
    </>
  )

}