import './App.css';
import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import AuthComponent from './components/AuthComponent'
import Home from './components/Home'
import Nav from './components/Nav';
import Dashboard from './components/admin/dashboard';
import StoreReservations from './components/admin/store-reservations';
import Counter from './components/admin/counter'
import Store from './components/client/store';
import StoreList from './components/client/store-list';
import Reservations from './components/client/reservations';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import Register from './components/Register/Register';



class App extends Component {  
  render() {
    return (
      <div>
        <Nav> </Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/admin/dashboard" component={AuthComponent(Dashboard)} />
          <Route path="/admin/store-reservations" component={AuthComponent(StoreReservations)} />
          <Route path="/reservations" component={AuthComponent(Reservations)} />
          <Route path="/admin/counter" component={AuthComponent(Counter)} />
          <Route path="/stores" component={AuthComponent(StoreList)} />
          <Route path="/store" component={AuthComponent(Store)} />
        </Switch>
      </div>
    );
  }
}

export default App;
