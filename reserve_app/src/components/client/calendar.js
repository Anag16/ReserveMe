import { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from "axios";

import { CalendarCreateModal } from './calendarHelper';

export default function Calendar(props) {
  // const { store_id, user_id, dateString } = props;
  const [isLoading, setLoading] = useState(true);
  const [reservations, setReservations] = useState({})
  const [modalState, setModalState] = useState({ openModal: false });
  const [selectorValue, setSelectorValue] = useState(new Date());

  useEffect(() => {
    axios.get(`/api/reservations`)
      .then(res => {
        if (res.status === 200) {
          let resultArray = [];
          let calendarObj = {};
          // for loop through res.data and extract values to remap
          for (const obj of res.data) {

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

        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error. Please try again');
      });
  }, [reservations]);


  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  // modal states
  const handleOpenModal = () => {
    setModalState({ openModal: true });
  };

  const handleClose = () => {
    setModalState({ openModal: false });
  };


  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{ center: 'dayGridMonth,timeGridWeek,timeGridDay' }}
        events={reservations}
        nowIndicator
        dateClick={handleOpenModal}
        //  (e) => console.log(e.dateStr)
        height="auto"
        allDaySlot={false}
      />
      <CalendarCreateModal {...modalState} onCloseModal={handleClose} value={selectorValue} setValue={setSelectorValue} />
    </>
  )

}