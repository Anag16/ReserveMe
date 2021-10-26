import React from "react";

export default function Dashboard(props) {

  return (
    <main className="layout">
      <h1>Dashboard</h1>
      <section className="sidebar">
        <nav className="menu">Search | List | Reservations</nav>
      </section>
      <section className="dashboard">
        <tr>
          <td>Dashboard</td>
          <td>Store page</td>
          <td>Clicker</td>
          <td>Admin menu option</td>
        </tr>
      </section>
    </main>
  )
}