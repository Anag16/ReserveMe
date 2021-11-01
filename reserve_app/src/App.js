import './App.css';
import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import AuthComponent from '../src/components/AuthComponent'
import Dashboard from '../src/components/admin/dashboard';
import Store from '../src/components/client/store';
import StoreList from './components/client/store-list';
import Reservations from './components/admin/reservations';
import Counter from './components/admin/counter'
import Nav from './components/Nav';
import Login from '../src/components/Login/Login';
import Logout from '../src/components/Login/Logout';
import Register from '../src/components/Register/Register';

class App extends Component {  
  render() {
    return (
      <div>
        <Nav> </Nav>
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/admin/dashboard" component={AuthComponent(Dashboard)} />
          <Route path="/admin/counter" component={AuthComponent(Counter)} />
          <Route path="/stores" component={AuthComponent(StoreList)} />
          <Route path="/store" component={AuthComponent(Store)} />
          <Route path="/admin/reservations" component={AuthComponent(Reservations)} />
        </Switch>
      </div>
    );
  }
}

export default App;
