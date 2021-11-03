import React from "react";
import Calendar from "../client/calendar";

import './admin.css';

export default function Reservations(props) {

  return (
    <div className="Reservations">
      <h1>My Reservations</h1>
      <Calendar />
    </div>
  )
}