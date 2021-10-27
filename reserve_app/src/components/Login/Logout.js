import React, { useState } from 'react';
import axios from 'axios';
import './Logout.css';
import { useHistory } from 'react-router-dom';


export default function Logout({ }) {
  const history = useHistory();

  const logout = async e => {
    axios.post(`/logout`)
    .then(res => {
     if (res.status === 200) {
       history.push("/stores");
     } else {
       const error = new Error(res.error);
       throw error;
     }
    })
     .catch(err => {
       console.error(err);
       alert('Error. Please try again');
     });
  }

  logout();
  return(
    <p>Logging out...</p>
  )
}
