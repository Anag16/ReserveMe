import './App.css';
import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/components/admin/dashboard';
import Store from '../src/components/client/store';
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';
import useToken from '../src/components/App/useToken';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>

        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;
