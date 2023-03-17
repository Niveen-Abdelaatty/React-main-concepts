import Dog from './Dog';

function DogList() {
  const dogs = [
    { name: 'Sparky', age: 5 },
    { name: 'Spot', age: 5 },
    { name: 'Ralph', age: 5 },
    { name: 'Fido', age: 5 },
  ];
  const dog = dogs.map((dog) => <Dog name={dog.name} age={dog.age} />);

  return <div>{dog}</div>;
}

export default DogList;
