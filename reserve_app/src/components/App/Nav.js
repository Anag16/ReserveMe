import { Link } from "react-router-dom";

function Nav () {

  return (
    <divcontainer>
      <Link to="/list">
        List of stores 🏠 
      </Link>
      
      <Link to="/store">
        Store 🏗 
      </Link>

      <Link to="/reservation">
        Reservation 📅 
      </Link>
    </divcontainer>
  )
}

export default Nav;