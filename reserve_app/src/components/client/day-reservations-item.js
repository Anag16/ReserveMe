import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function DayReservationItem(props) {
  const { store_id, user_id, dateString } = props;

  const [isLoading, setLoading] = useState(true);
  const [availableDays, setAvailableDays] = useState();

  let day = new Date(dateString);
  useEffect(() => {
    axios.get(`/api/reservations/${store_id}/${day.toISOString()}`)
    .then(res => {
     if (res.status === 200) {
       setAvailableDays(res.data);
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
  });

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div>
      <p>The date is: {dateString}</p>
    </div>
  );

}