import React from "react";

export default function Dashboard(props) {

  return (
    <main className="layout">
      <h1>Dashboard</h1>
      <section className="sidebar">
        <tr>
          <td>Dashboard</td>
          <br/>
          <td>Store page</td>
          <br/>
          <td>Clicker</td>
          <br/>
          <td>Admin menu option</td>
        </tr>
      </section>
      <section className="dashboard">
        <h2>Pertinent information group</h2>
        <h3>Pertinent information</h3>
      </section>
    </main>
  )
}