import { NavLink } from "react-router-dom";
import useCookie from "../useCookie";

function Nav () {
  const [cookie, updateCookie] = useCookie('token');
  console.log(`Current cookie is: ${cookie}`);
//   let [authToken, setToken] = useState(0); 

    let homePage = cookie ?  <NavLink to="/">Home 🏠 </NavLink>: '';
    let storeList = cookie ? <NavLink to="/stores">List of stores 🏠</NavLink> : '';
    let store = cookie ? <NavLink to="/store">Store 🏗 </NavLink> : '';
    let reservation = cookie ?  <NavLink to="/reservation">Reservation 📅 </NavLink> : '';
    let dashboard = cookie ?  <NavLink to="/admin/dashboard">Dashboard 🐗 </NavLink> : '';
    let login = !cookie ?   <NavLink to="/login">Login 🚪 </NavLink>: '';
    let logout = cookie ?  <NavLink to="/logout"  onClick={() => {updateCookie(null);}}>Logout 📅 </NavLink>: '';
    let register = !cookie ?  <NavLink to="/register">Register ✏ </NavLink>: '';

  return (
    <divcontainer>
     
      {homePage}
      {storeList}
      {store}
      {reservation}
      {dashboard}
      {login}
      {logout}
      {register}      
    </divcontainer>
  )
}

export default Nav;