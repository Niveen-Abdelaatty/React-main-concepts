import './App.css';
import Arthur from './components/Arthur';
import DogList from './components/DogList';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';

function App() {
  return (
    <div className='App'>
      <h1>Iterating Over an Array in React</h1>
      <DogList />
      <h1>Iterating Over an Object in React</h1>
      <Arthur />
      <h1>Uncontrolled Form using useRef Hook in React</h1>
      <UncontrolledForm />
      <h1>Controlled Form using useState Hook in React</h1>
      <ControlledForm />
    </div>
  );
}

export default App;
