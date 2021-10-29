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
       console.log(res.data);
      let resultArray = [];
      let calendarObj = {};

      // for loop through res.data and extract values to remap
      for (const obj of res.data) {
        // console.log(obj);
        const dateVal = obj.reservation_date.slice(0,10)
        // console.log(dateVal);

        calendarObj = {
          title: "Booked slot",
          start: dateVal,
          end: dateVal,
          // startTime: `${obj.start_hour}:${obj.start_minutes}`,
          // endTime: `${obj.end_hour}:${obj.end_minutes}`
          startTime: {
            hour: obj.start_hour,
            minute: obj.start_minutes
          },
          endTime: {
            hour: obj.end_hour,
            minute: obj.end_minutes
          }
        };
        resultArray.push(calendarObj);
      }
      
      console.log(typeof calendarObj.start);
      console.log("Results Array:",resultArray);

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
         nowIndicator
      />
    </>
  )

}