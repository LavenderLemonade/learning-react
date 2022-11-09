import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet.js';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet />

      <Welcome> </Welcome>
    </div>
  );
}

export default App;
