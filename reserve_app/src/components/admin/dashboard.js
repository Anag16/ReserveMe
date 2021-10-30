import React, { useState } from "react";

export default function Dashboard(props) {
  const [storeName, setStoreName] = useState(props.storeName || "");
  const [storeDescription, setStoreDescription] = useState(props.storeDescription || "");
  const [storeLocation, setStoreLocation] = useState(props.storeLocation || "");
  const [safetyMeasures, setSafetyMeasures] = useState(props.safetyMeasures || "");

  const cancel = () => {
    cancel();
    props.onCancel();
  };

  const save = () => {
    save();
    props.onSave();
  }
  return (
    <main className="layout">
      <h1>Dashboard</h1>
      <section className="sidebar">
        <tr>
          <td>Dashboard</td>
          <br />
          <td>Store page</td>
          <br />
          <td>Clicker</td>
          <br />
          <td>Admin menu option</td>
        </tr>
      </section>
      <section className="dashboard">
        <h2>Pertinent information group</h2>
        <h3>Pertinent information</h3>
      </section>
      <form onSubmit={event => event.preventDefault()}>
        <section>
          <input
            className="store-name"
            name="name"
            type="text"
            placeholder="Enter store name"
            value={storeName}
            onChange={(event) => setStoreName(event.target.value)}
            data-testid="store-name-input"
          />
        </section>
        <section className="description">
          <input
            className="store-description"
            name="name"
            type="text"
            placeholder="Enter store description"
            value={storeDescription}
            onChange={(event) => setStoreDescription(event.target.value)}
            data-testid="store-description-input"
          />
        </section>
        <section className="store-image">
          Store image
        </section>
        <section className="location">
          <input
            className="store-location"
            name="name"
            type="text"
            placeholder="Enter store location"
            value={storeLocation}
            onChange={(event) => setStoreLocation(event.target.value)}
            data-testid="store-location-input"
          />
        </section>
        <section className="store-capacity">
          Store capacity
        </section>
        <section className="customer-count">
          Customer count
        </section>
        <section className="reservation-capacity">
          reservation capacity
        </section>
        <section className="safety-measures">
          <input
            className="safety-measures"
            name="name"
            type="text"
            placeholder="Enter store safety measures"
            value={safetyMeasures}
            onChange={(event) => setSafetyMeasures(event.target.value)}
            data-testid="safety-measures-input"
          />
        </section>
        <section className="opening-hours">
          Opening hours
        </section>
        <section className="closing-hours">
          Closing hours
        </section>
      </form>
      <section className="store-buttons">
        <button onClick={cancel}>Cancel changes</button>
        <button onClick={save}>Save changes</button>
      </section>
    </main>
  )
}