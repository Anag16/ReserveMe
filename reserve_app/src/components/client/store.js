import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import useCookie from "../useCookie";
import DayReservationItem from "./day-reservations-item";
import StoreTabs from './store-tabs';
import './store.css';

export default function Store(props) {

  const location = useLocation()
  const { store_id } = location.state;
  const [isLoading, setLoading] = useState(true);
  const [store, setStore] = useState();
  const [user_id] = useCookie('user_id');
  const [user_fullname] = useCookie('user_fullname');
  const [reservationDay, onDayChange] = useState(new Date(Date.now()));

  useEffect(() => {
    axios.get(`/api/stores/${store_id}`)
    .then(res => {
     if (res.status === 200) {
       setStore(res.data);
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
  },[]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  let storeObj = store[0];

  return (
    <div className="Store">
      <h1> {storeObj.name}</h1>
      <img src={storeObj.image} />

      <StoreTabs 
        description={storeObj.description}
        location={storeObj.location}
        capacity={storeObj.capacity}
        customer_count={storeObj.customer_count}
        reservation_capacity={storeObj.reservation_capacity}
        safety_measures={storeObj.safety_measures}
        opening_hour={storeObj.opening_hour}
        closing_hour={storeObj.closing_hour}
      />

      <DayReservationItem 
        store_id = {storeObj.store_id}
        user_id = {user_id}
        dateString = {reservationDay.toISOString().slice(0, 19).replace('T', ' ')}
      ></DayReservationItem>
    </div>
  )
}