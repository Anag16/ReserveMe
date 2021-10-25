import './App.css';
import Registration from './client/registration';
import Reservation from './client/reservation';
import StoreList from './client/store-list';
import Store from './client/store';

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <Registration />
      <Reservation />
      <StoreList />
      <Store />
    </div>
  );
}

export default App;
