import './App.css';
import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/components/admin/dashboard';
import Store from '../src/components/client/store';
import Login from '../src/components/Login/Login';
import useToken from '../src/components/App/useToken';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
