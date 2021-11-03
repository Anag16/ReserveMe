import React, { useState } from "react";
import Button from "@mui/material/Button"

import './admin.css';

export default function Dashboard(props) {
  // const [state, setState] = useState({
  //   storeName: "",
  //   storeDescription: "",
  //   storeImage: "",
  //   storeLocation: "",
  //   storeCapacity: "",
  //   reservationCapacity: "",
  //   safetyMeasures: "",
  //   openingHours: "",
  //   closingHours: ""
  // })

  // const setStoreName = storeName => setState({...state, storeName: storeName})
  // const setStoreDescription = storeDescription => setState({...state, storeDescription: storeDescription})
  // const setStoreImage = storeImage => setState({...state, storeImage: storeImage})
  // const setStoreLocation = storeLocation => setState({...state, storeLocation: storeLocation})
  // const setStoreCapacity = storeCapacity => setState({...state,storeCapacity: storeCapacity})
  // const setReservationCapacity = reservationCapacity => setState({...state, reservationCapacity: reservationCapacity})
  // const setSafetyMeasures = safetyMeasures => setState({...state, safetyMeasures: safetyMeasures})
  // const setOpeningHours = openingHours => setState({...state, openingHours: openingHours})
  // const setClosingHours = closingHours => setState({...state, closingHours: closingHours})

  const [storeName, setStoreName] = useState(props.storeName || "");
  const [storeDescription, setStoreDescription] = useState(props.storeDescription || "");
  const [storeLocation, setStoreLocation] = useState(props.storeLocation || "");
  const [safetyMeasures, setSafetyMeasures] = useState(props.safetyMeasures || "");

  const cancel = () => {
    // cancel();
    props.onCancel();
  };

  const save = () => {
    // save();
    props.onSave(storeName, storeDescription, storeLocation, safetyMeasures /*store_image, location, store_capacity, reservation_capacity, opening_hours, closing_hours*/);
  }
  return (
    <main className="layout">
      <h1>Dashboard</h1>
      <div className="Dashboard">
      <form onSubmit={event => event.preventDefault()}>
        <section>
          <label for="store-name">Enter store name</label>
          <br/>
          <input id="store-name"
            type="text"
            placeholder="Enter store name"
            value={storeName}
            onChange={(event) => setStoreName(event.target.value)}
          />
        </section>
        <br />
        <section className="description">
          <label for="description">Enter store description</label>
          <br />
          <textarea id="description"
            placeholder="Enter store description"
            value={storeDescription}
            onChange={(event) => setStoreDescription(event.target.value)}
          />
        </section>
        <br />
        <section className="store-image">
          <label for="file">Choose a file to use as store image</label>
          <br />
          <input type="file" id="store_image" accept="image/png, image/jpeg" />
        </section>
        <br />
        <section className="store-location">
        <label for="store-location">Enter store location</label>
        <br/>
          <input
            type="text"
            placeholder="Enter store location"
            value={storeLocation}
            onChange={(event) => setStoreLocation(event.target.value)}
          />
        </section>
        <br />
        <section className="store-capacity">
          <label for="store_capacity">Enter maximum store capacity</label>
          <br />
          <input type="number" id="store_capacity" min="0" />
        </section>
        <br />
        <section className="reservation-capacity">
          <label for="reservation_capacity">Enter maximum reservation capacity</label>
          <br />
          <input type="number" id="reservation_capacity" min="0" max="{store_capacity}"/>
        </section>
        <br />
        <section className="safety-measures">
          <label for="safety-measures-input">List of safety measures taken</label>
          <br />
          <input
            type="text"
            placeholder="Enter store safety measures"
            value={safetyMeasures}
            onChange={(event) => setSafetyMeasures(event.target.value)}
          />
        </section>
        <br />
        <section className="opening-hours">
          <label for="opening_hours">Choose a opening time</label>
          <br />
          <input type="time" id="opening_hours" />
        </section>
        <br />
        <section className="closing-hours">
          <label for="closing_hours">Choose a closing time</label>
          <br />
          <input type="time" id="closing_hours" />
        </section>
      </form>
      <br />
      <section className="store-buttons">
        <Button variant="outlined" onClick={cancel}>Cancel</Button>
        <Button variant="contained" onClick={save}>Save</Button>
      </section>
      </div>
    </main>
  )
}