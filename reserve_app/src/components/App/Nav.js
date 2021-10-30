import React from "react";
import { NavLink } from "react-router-dom";
import useCookie from "../useCookie";
import { Button, Menu, MenuItem } from '@mui/material';

function Nav() {
  const [cookie, updateCookie] = useCookie('token');
  //   let [authToken, setToken] = useState(0); 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  let homePage = cookie ? <NavLink to="/">Home 🏠 </NavLink> : '';
  let storeList = <NavLink to="/stores">List of stores 🏠</NavLink>;
  // let store = cookie ? <NavLink to="/store">Store 🏗 </NavLink> : '';
  let reservation = cookie ? <NavLink to="/reservation">Reservation 📅 </NavLink> : '';
  let dashboard = cookie ? <NavLink to="/admin/dashboard">Dashboard 🐗 </NavLink> : '';
  const counter = <NavLink to="/admin/counter">Counter </NavLink>;
  let login = !cookie ? <NavLink to="/login">Login 🚪 </NavLink> : '';
  let logout = cookie ? <NavLink to="/logout" onClick={() => { updateCookie(null); }}>Logout 📅 </NavLink> : '';
  let register = !cookie ? <NavLink to="/register">Register ✏ </NavLink> : '';

  return (
    <div>

      {homePage}
      {storeList}
      {/* {store} */}
      {reservation}
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? `true` : undefined}
          onClick={handleClick}>
          Admin
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ 'aria-labelledby': `basic-button`, }}>
            {/* Not working as a link yet */}
          <MenuItem onClick={dashboard}>Dashboard</MenuItem>
          <MenuItem onClick={counter}>Counter</MenuItem>
        </Menu>
      {login}
      {logout}
      {register}
    </div>
  )
}

export default Nav;