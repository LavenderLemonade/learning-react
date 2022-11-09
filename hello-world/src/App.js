import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet.js';
import Welcome from './Components/Welcome';
import Message from './Components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet name = "Bruce" heroName = "Batman">
        <p> this is children props </p> </Greet>
      <Greet name = "Clark" heroName = "Superman"> 
      <button> Hey</button></Greet>
      <Greet name = "Diana" heroName = "Wonder Woman"/>

      <Welcome name = "Bruce" heroName = "Batman">  </Welcome>
      <Welcome name = "Clark" heroName = "Superman">  </Welcome>
      <Welcome name = "Diana" heroName = "Wonder Woman">  </Welcome> */}
      <Message> </Message>

    </div>
  );
}

export default App;
