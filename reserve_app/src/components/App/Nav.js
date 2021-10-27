import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import { NavLink } from "react-router-dom";
import useCookie from "../useCookie";

function Nav () {
  const cookies = new Cookies();
  const [cookie, updateCookie] = useCookie('token');
  console.log(`Current cookie is: ${cookie}`);
//   let [authToken, setToken] = useState(0); 

  
    let storeList = cookie ? <NavLink to="/stores">List of stores 🏠</NavLink> : '';

  return (
    <divcontainer>
      <NavLink to="/">
        Home 🏠 
      </NavLink>

      {storeList}
      {/* <NavLink to="/stores">
        List of stores 🏘 
      </NavLink> */}
      
      <NavLink to="/store">
        Store 🏗 
      </NavLink>

      <NavLink to="/reservation">
        Reservation 📅 
      </NavLink>

      <NavLink to="/admin/dashboard">
        Dashboard 🐗 
      </NavLink>

      <NavLink to="/login" onClick={() => { updateCookie(true); }}>
        Login 🚪 
      </NavLink>

      <NavLink to="/logout"  onClick={() => {
          updateCookie(null);
        }}>
        Logout 📅 
      </NavLink>

      <NavLink to="/register">
        Register ✏ 
      </NavLink>
    </divcontainer>
  )
}

export default Nav;