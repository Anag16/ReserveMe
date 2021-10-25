import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/components/admin/dashboard';
import Store from '../src/components/client/store';

function App() {
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
