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
    setStoreName(storeName);
    setStoreDescription(storeDescription);
    setStoreLocation(storeLocation);
    setSafetyMeasures(safetyMeasures);
  };

  function save(storeName, storeDescription, storeLocation, safetyMeasures) {
    // save();
    const store = {
      storeName: storeName,
      storeDescription: storeDescription,
      storeLocation: storeLocation,
      safetyMeasures: safetyMeasures
    }
    // props.onSave(store/*storeName, storeDescription, storeLocation, safetyMeasures, store_image, location, store_capacity, reservation_capacity, opening_hours, closing_hours*/);
  }
  return (
    <main className="layout">
      <h1>Dashboard</h1>
      <div className="Dashboard">
      <form onSubmit={event => event.preventDefault()}>
        <section className="store-name">
          <label for="store-name">Store Name:</label>
          <input id="store-name"
            type="text"
            placeholder="Enter store name"
            value={storeName}
            onChange={(event) => setStoreName(event.target.value)}
          />
        </section>

        <section className="description">
          <label for="description">Store Description:</label>
          <textarea id="description" rows="5" cols="30"
            placeholder="Enter Store Description"
            value={storeDescription}
            onChange={(event) => setStoreDescription(event.target.value)}
          />

        </section>  
        <section className="store-image">
          <label for="file">Choose a file to use as store image</label>
          <input type="file" id="store_image" accept="image/png, image/jpeg" />
        </section>

        <section className="store-location">
        <label for="store-location">Store Location:</label>
          <input
            type="text"
            placeholder="Enter Store Location"
            value={storeLocation}
            onChange={(event) => setStoreLocation(event.target.value)}
          />
        </section>

        <section className="store-capacity">
          <label for="store_capacity">Maximum Store Capacity:</label>
          <input type="number" id="store_capacity" min="0" max="99"/>
        </section>  

        <section className="reservation-capacity">
          <label for="reservation_capacity">Maximum Reservation Capacity:</label>
          <input type="number" id="reservation_capacity" min="0" max="99"/>
        </section>

        <section className="safety-measures">
          <label for="safety-measures-input">Safety Measures Taken:</label>
          <textarea id="safety-measures" rows="5" cols="30"
            placeholder="Enter store safety measures"
            value={safetyMeasures}
            onChange={(event) => setSafetyMeasures(event.target.value)}
          />
        </section>

        <section className="opening-hours">
          <label for="opening_hours">Opening Hour: </label>
          <input type="time" id="opening_hours" />
        </section>

        <section className="closing-hours">
          <label for="closing_hours">Closing Hour: </label>
          <input type="time" id="closing_hours" />
        </section>
      </form>

      <section className="store-buttons">
        <Button className="cancel" variant="outlined" onClick={cancel}>Cancel</Button>
        <Button className="save" variant="contained" onClick={save}>Save</Button>
      </section>
      </div>
    </main>
  )
}