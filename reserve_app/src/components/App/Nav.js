import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

function Nav () {
  const cookies = new Cookies();
//   let [authToken, setToken] = useState(0); 

//   authToken = cookies.get('token');
  
//  let storeList = authToken ? <Link to="/stores">List of stores 🏠</Link> : '';

  return (
    <divcontainer>
      <Link to="/">
        Home 📅 
      </Link>

       <Link to="/stores">List of stores 🏠</Link>

      <Link to="/store">
        Store 🏗 
      </Link>

      <Link to="/reservation">
        Reservation 📅 
      </Link>

      <Link to="/admin/dashboard">
        Dashboard 
      </Link>

      <Link to="/login">
        Login 📅 
      </Link>

      <Link to="/logout">
        Logout 📅 
      </Link>

      <Link to="/register">
        Register 📅 
      </Link>
    </divcontainer>
  )
}

export default Nav;