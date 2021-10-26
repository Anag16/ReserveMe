import './App.css';
import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/components/admin/dashboard';
import Store from '../src/components/client/store';
import StoreList from './components/client/store-list';
import Reservation from './components/client/reservation';
import Nav from './components/App/Nav';
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';
import useToken from '../src/components/App/useToken';

class App extends Component {
  render() {
    return (
      <div>
        <Nav> </Nav>
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route path="/stores" component={StoreList} />
          <Route path="/store" component={Store} />
          <Route path="/reservation" component={Reservation} />
        </Switch>
      </div>
    );
  }
}

export default App;
