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
      let resultArray = [];
      let calendarObj = {};
      // for loop through res.data and extract values to remap
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
      // console.log(calendarObj);
      // console.log("Results Array:",resultArray);

       setReservations(resultArray);
       setLoading(false);
       console.log(resultArray);
       console.log(reservations);
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
  // console.log(reservations.reservation_date.slice(0,10));
  console.log(reservations);
  return (
    <>
      <FullCalendar 
         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
         initialView="dayGridMonth"
         headerToolbar={{center: 'dayGridMonth,timeGridWeek,timeGridDay'}}
         events = {reservations}
         nowIndicator
      />
    </>
  )

}