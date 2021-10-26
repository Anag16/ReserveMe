import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

async function loginUser(credentials) {
 axios.post(`/login`, { credentials })
 .then(res => {
  if (res.status === 200) {
    alert(res.data);
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

export default function Login({ }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {

};