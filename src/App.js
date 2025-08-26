import './App.css';
import ToggleStateTest from './components/comp-four';
import Greetings from './components/comp-one';
import BodyMain from './components/comp-three';
import NameData from './components/comp-two';

function App() {
  return (
  <div className='App'>
    <Greetings></Greetings>
    <NameData person="Maksim"></NameData>
    <BodyMain></BodyMain>
    <ToggleStateTest></ToggleStateTest>
  </div>
  );
}

export default App;
