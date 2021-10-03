import logo from './logo.svg';
import './App.css';
import { store } from './actions/store';
import { Provider } from "react-redux";
import { vehicle } from './reducers/vehicle';
import Vehicle from './components/Vehicle';
import { Container } from "@material-ui/core";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">

      </Container>
        <Vehicle />
    </Provider>
  );
}

export default App;
