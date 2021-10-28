import React from "react";
import { useLocation } from 'react-router-dom'

export default function Store(props) {

  const location = useLocation()
  const { store_id } = location.state

  return (
    <div className="Store">
      <h1>Store</h1>
      <p>This store's id is: {store_id}</p>
    </div>
  )
}