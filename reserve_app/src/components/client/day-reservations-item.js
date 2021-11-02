import React, { useState, useEffect } from "react";
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarCreateModal } from './calendarHelper';

export default function DayReservationItem(props) {
  const { store_id, store_name, store_capacity, user_id, dateString } = props;

  const [isLoading, setLoading] = useState(true);
  const [availableDays, setAvailableDays] = useState({});
  //before merge:  const [availableDays, setAvailableDays] = useState();
  const [modalState, setModalState] = useState({ openModal: false });
  const [selectorValue, setSelectorValue] = useState(new Date());
  const [remainingCapacity, setRemainingCapacity] = useState();
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
                store_name : store_name

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
        alert('Error. Please try again');
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

    if (isLoading) {
      return <div className="App">Loading...</div>;
    }
  }

  const handleReservationClick = (e) =>{
    console.log(e.event.extendedProps);
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