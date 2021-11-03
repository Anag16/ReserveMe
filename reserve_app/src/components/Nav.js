import React from "react";
import { NavLink } from "react-router-dom";
import useCookie from "./useCookie";
import { Button, Menu, MenuItem, AppBar, Box, Toolbar } from '@mui/material';
import './Nav.css';

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

  const loggedInLinks = [
    { name: "Home", path: "/" },
    { name: "Stores", path: "/stores" },
    { name: "My Reservations", path: "/reservations" },
  ];

  const loggedOutLinks = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];


  let homePage = cookie ? <NavLink to="/">Home 🏠 </NavLink> : '';
  let storeList = <NavLink to="/stores">List of stores 🏠</NavLink>;
  // let store = cookie ? <NavLink to="/store">Store 🏗 </NavLink> : '';
  let reservation = cookie ? <NavLink to="/reservation">Reservation 📅 </NavLink> : '';
  // let dashboard = cookie ? <NavLink to="/admin/dashboard">Dashboard 🐗 </NavLink> : '';
  let login = !cookie ? <NavLink to="/login">Login 🚪 </NavLink> : '';
  let logout = cookie ? <NavLink to="/logout" onClick={() => { updateCookie(null); }}>Logout 📅 </NavLink> : '';
  let register = !cookie ? <NavLink to="/register">Register ✏ </NavLink> : '';

  const loggedInNav = loggedInLinks.map(
    (link, index) => (
      <NavLink key={index} to={link.path} style={{ textDecoration: "none" }}>
        <Button variant="text" component="div" sx={{ px: 1, display: "flex", justifyContent: "flex-start" }}>
          {link.name}
        </Button>
      </NavLink>
    ))

  const loggedOutNav = loggedOutLinks.map((link, index) => (
    <NavLink key={index} to={link.path} style={{ textDecoration: "none" }}>
      <Button variant="text" component="div" sx={{ px: 1, display: "flex", justifyContent: "flex-end" }}>
        {link.name}
      </Button>
    </NavLink>
  ));
  
  const logoutPlusAdmin = () => {
    return (
      <div className="right">
        <Button
          variant="outlined"
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
          <MenuItem component={NavLink} to="/admin/dashboard">Dashboard</MenuItem>
          <MenuItem component={NavLink} to="/admin/counter">Counter</MenuItem>
        </Menu>

        <NavLink to="/logout" onClick={() => { updateCookie(null) }} style={{textDecoration:"none"}}>
          <Button variant="text" component="div">
            Logout
          </Button>
        </NavLink>
      </div>
    )
  }

  return (
    <div>
      <AppBar position="static" color="default" sx={{ mb: 2 }}>
        {cookie &&
          <Toolbar sx={{ justifyContent: "space-between" }}>
           {loggedInNav}
           { logoutPlusAdmin() }
          </Toolbar>
        }

        {!cookie &&
          <Toolbar sx={{ justifyContent: "flex-end" }}>
            {loggedOutNav}
          </Toolbar>
        }
      </AppBar>


      {/* {homePage}
      {storeList}
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
        <MenuItem component={NavLink} to="/admin/dashboard">Dashboard</MenuItem>
        <MenuItem component={NavLink} to="/admin/counter">Counter</MenuItem>
      </Menu>
      {login}
      {logout}
      {register} */}
    </div>
  )
}

export default Nav;