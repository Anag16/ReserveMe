import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/components/admin/dashboard';
import Login from '../src/components/Login/Login';
import Store from '../src/components/client/store';
import StoreList from './components/client/store-list';
import Reservation from './components/client/reservation';

import Nav from './components/App/Nav';

import useToken from '../src/components/App/useToken';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
      <Nav> </Nav>
        <Switch>
          <Route path="/admin/dashboard">
            <Dashboard />
          </Route>
          <Route path="/list">
            <StoreList />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/reservation">
            <Reservation />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
