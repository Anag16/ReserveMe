import { Link } from "react-router-dom";

function Nav () {

  return (
    <divcontainer>
      <Link to="/">
        Home 📅 
      </Link>
      <Link to="/list">
        List of stores 🏠 
      </Link>
      
      <Link to="/store">
        Store 🏗 
      </Link>

      <Link to="/reservation">
        Reservation 📅 
      </Link>

      <Link to="/login">
        Login 📅 
      </Link>

      <Link to="/register">
        Register 📅 
      </Link>
    </divcontainer>
  )
}

export default Nav;