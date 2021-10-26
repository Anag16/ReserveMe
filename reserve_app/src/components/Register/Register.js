
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

async function registerUser(userData) {
  axios.post(`/register`, { userData })
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

export default function Register({}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await registerUser({
      email,
      password,
      name,
      phone
    });
  }

  return(
    <div className="login-wrapper">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      ` <label>
          <p>Name</p>
          <input type="text" onChange={e => setName(e.target.value)} />
        </label>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <label>
          <p>Phone</p>
          <input type="number" onChange={e => setPhone(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Register.propTypes = {
 
};