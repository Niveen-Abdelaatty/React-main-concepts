import './App.css';
import Arthur from './components/Arthur';
import DogList from './components/DogList';
import UncontrolledForm from './components/UncontrolledForm';

function App() {
  return (
    <div className='App'>
      <h1>Iterating Over an Array in React</h1>
      <DogList />
      <h1>Iterating Over an Object in React</h1>
      <Arthur />
      <h1>Practicing useRef Hook in React</h1>
      <UncontrolledForm />
    </div>
  );
}

export default App;
