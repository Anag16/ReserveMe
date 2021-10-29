import React, { useState, useEffect } from "react";
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Calendar from "./calendar";

export default function DayReservationItem(props) {
  const { store_id, user_id, dateString } = props;

  const [isLoading, setLoading] = useState(true);
  const [availableDays, setAvailableDays] = useState();

  useEffect(() => {
    let day = new Date(dateString);
    // ${day.toISOString()}
    axios.get(`/api/reservations/${store_id}/`)
    .then(res => {
     if (res.status === 200) {
      let resultArray = [];
      let calendarObj = {};
      for (const obj of res.data) {
        console.log(obj);
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
       console.log(resultArray);
     } else {
       const error = new Error(res.error);
       throw error;
     }
    })
     .catch(err => {
       console.error(err);
       alert('Error. Please try again');
     });
  });

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <FullCalendar 
    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    initialView="dayGridWeek"
    headerToolbar={{center: 'timeGridWeek,timeGridDay'}}
    events = {availableDays}
    nowIndicator
 />
    // <Calendar 
    // store_id = {store_id}
    // user_id = {user_id}
    // dateString = {dateString}
    // />
  );

}