import './App.css';
import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthComponent from '../src/components/AuthComponent'
import Dashboard from '../src/components/admin/dashboard';
import Store from '../src/components/client/store';
import StoreList from './components/client/store-list';
import Reservation from './components/client/reservation';
import Nav from './components/App/Nav';
import Login from '../src/components/Login/Login';
import Logout from '../src/components/Login/Logout';
import Register from '../src/components/Register/Register';
import { useHistory } from 'react-router-dom';

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
          <Route path="/stores" component={AuthComponent(StoreList)} />
          <Route path="/store" component={AuthComponent(Store)} />
          <Route path="/reservation" component={AuthComponent(Reservation)} />
        </Switch>
      </div>
    );
  }
}

export default App;
