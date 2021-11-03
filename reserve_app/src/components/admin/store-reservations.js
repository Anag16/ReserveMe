import React from "react";
import Calendar from "../client/calendar";

import './admin.css';

export default function StoreReservations(props) {

  return (
    <div className="StoreReservations">
      <h1>Store Reservations</h1>
      <Calendar />
    </div>
  )
}