import './App.css';
import Arthur from './components/Arthur';
import DogList from './components/DogList';

function App() {
  return (
    <div className="App">
      <h1>Iterating Over an Array in React</h1>
      <DogList />
      <h1>Iterating Over an Object in React</h1>
      <Arthur />
    </div>
  );
}

export default App;
