import React, { useState, useEffect } from "react";
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarCreateModal } from './calendarHelper';

export default function DayReservationItem(props) {
  const { store_id, store_capacity, user_id, dateString } = props;

  const [isLoading, setLoading] = useState(true);
  const [availableDays, setAvailableDays] = useState();
  const [modalState, setModalState] = useState({ openModal: false });
  const [selectorValue, setSelectorValue] = useState(new Date());

  const getReservations = function (){
    axios.get(`/api/reservations/${store_id}/`)
    .then(res => {
      if (res.status === 200) {
        let resultArray = [];
        let calendarObj = {};
        for (const obj of res.data) {
          // console.log(obj);
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
            // // startTime: `${obj.start_hour}:${obj.start_minutes}`,
            // // endTime: `${obj.end_hour}:${obj.end_minutes}`
            // startTime: {
            //   hour: obj.start_hour,
            //   minute: obj.start_minutes
            // },
            // endTime: {
            //   hour: obj.end_hour,
            //   minute: obj.end_minutes
            // }
          };
          resultArray.push(calendarObj);
        }
        setAvailableDays(resultArray);
        setLoading(false);
        //  console.log(resultArray);
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
    let day = new Date(dateString);
    // ${day.toISOString()}
    getReservations();
  }, [store_id]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

    const displayModal = function(date, store_id, capacity){
      axios.get(`/api/reservations/${store_id}/${date.toISOString()}/${date.getHours()}/${date.getMinutes()}`)
      .then(res => {
        if (res.status === 200) {
          let count = res.data.length;
          console.log(capacity);
          if (count < capacity){
            console.log('We have room');
            setModalState({ openModal: true });
            setSelectorValue(date);
          }
          else{
            alert('We are full at that time.')
          }
          
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
    // modal states
    const handleOpenModal = (e) => {
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
    <CalendarCreateModal {...modalState} onCloseModal={handleClose} value={selectorValue} setValue={setSelectorValue} store_id = {store_id} user_id = {user_id} getReservations = {getReservations}/>
  </>
  );

}