import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Store(props) {

  const location = useLocation()
  const { store_id } = location.state;
  const [isLoading, setLoading] = useState(true);
  const [store, setStore] = useState();

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
  });

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  let storeObj = store[0];
  return (
    <div className="Store">
      <h1>Store</h1>
      <p>This store's name is: {storeObj.name}</p>
    </div>
  )
}