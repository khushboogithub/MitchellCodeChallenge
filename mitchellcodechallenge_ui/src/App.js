import logo from './logo.svg';
import './App.css';
import { store } from './actions/store';
import { Provider } from "react-redux";
import { vehicle } from './reducers/vehicle';
import Vehicle from './components/Vehicle';

function App() {
  return (
    <Provider store={store}>
        <Vehicle />
    </Provider>
  );
}

export default App;
