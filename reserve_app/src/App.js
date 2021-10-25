import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/components/admin/dashboard';
import Store from '../src/components/client/store';
import Login from '../src/components/Login/Login';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/admin/dashboard">
            <Dashboard />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
