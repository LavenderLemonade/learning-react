import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet.js';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import styles from './Components/appStyles.module.css'
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';

function App() {
  return (
    <div className="App">

    {/* <h1 className = {styles.happy}> happy </h1> */}

      {/* <Greet /> */}

    {/* <Counter /> */}
      {/* <Greet name = "Bruce" heroName = "Batman">
        <p> this is children props </p> </Greet>
      <Greet name = "Clark" heroName = "Superman"> 
      <button> Hey</button></Greet>
      <Greet name = "Diana" heroName = "Wonder Woman"/>

      <Welcome name = "Bruce" heroName = "Batman">  </Welcome>
      <Welcome name = "Clark" heroName = "Superman">  </Welcome>
      <Welcome name = "Diana" heroName = "Wonder Woman">  </Welcome> */}
      {/* <Message> </Message> */}

      {/* <FunctionClick/> */}

      {/* <ClassClick /> */}

      {/* <EventBind /> */}

      {/* <ParentComponent /> */}

      {/* <UserGreeting /> */}

      {/* <NameList /> */}

      {/* <StyleSheet primary = {true}> 
        
      </StyleSheet>

      <Inline /> */}

      {/* <Form /> */}

      <LifecycleA/>

    </div>
  );
}

export default App;
