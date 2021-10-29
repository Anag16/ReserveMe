import { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from "axios";

export default function Calendar(props) {
  const [isLoading, setLoading] = useState(true);
  const [reservations, setReservations] = useState({})

  useEffect(() => {
    axios.get(`/api/reservations`)
    .then(res => {
     if (res.status === 200) {
       setLoading(false);
      //  console.log(res.data[0]);
      let resultArray = [];
      // for loop through res.data {}
      for (const obj of res.data) {
        console.log(obj);
        let calendarObj = {
          title: "Booked slot",
          start: obj.reservation_date,
          end: obj.reservation_date,
          startTime: `${obj.start_hour}:${obj.start_minutes}`,
          endTime: `${obj.end_hour}:${obj.end_minutes}`
        };
        resultArray.push(calendarObj);
      }


       setReservations(resultArray);
     } else {
       const error = new Error(res.error);
       throw error;
     }
    })
     .catch(err => {
       console.error(err);
       alert('Error. Please try again');
     });
  }, []);

  // console.log(reservations.reservation_date.slice(0,10));

  return (
    <>
      <FullCalendar 
         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
         initialView="dayGridMonth"
         headerToolbar={{center: 'dayGridMonth,timeGridWeek,timeGridDay'}}
         events={reservations}
      />
    </>
  )

}