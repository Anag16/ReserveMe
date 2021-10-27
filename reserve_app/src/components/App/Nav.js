import { NavLink } from "react-router-dom";

function Nav () {

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

      <NavLink to="/register">
        Register ✏ 
      </NavLink>
    </divcontainer>
  )
}

export default Nav;