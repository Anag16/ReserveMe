import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import { NavLink } from "react-router-dom";

function Nav () {
  const cookies = new Cookies();
//   let [authToken, setToken] = useState(0); 

//   authToken = cookies.get('token');
  
//  let storeList = authToken ? <Link to="/stores">List of stores 🏠</Link> : '';

  return (
    <divcontainer>
      <NavLink to="/">
        Home 🏠 
      </NavLink>
      <NavLink to="/stores">
        List of stores 🏘 
      </NavLink>
      
      <NavLink to="/store">
        Store 🏗 
      </NavLink>

      <NavLink to="/reservation">
        Reservation 📅 
      </NavLink>

      <NavLink to="/admin/dashboard">
        Dashboard 🐗 
      </NavLink>

      <NavLink to="/login">
        Login 🚪 
      </NavLink>

      <NavLink to="/logout">
        Logout 📅 
      </NavLink>

      <NavLink to="/register">
        Register ✏ 
      </NavLink>
    </divcontainer>
  )
}

export default Nav;