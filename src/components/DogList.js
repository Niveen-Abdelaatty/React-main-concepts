import Dog from './Dog';

function DogList() {
  const dogs = [
    { id: 1, name: 'Sparky', age: 5 },
    { id: 2, name: 'Spot', age: 5 },
    { id: 3, name: 'Ralph', age: 5 },
    { id: 4, name: 'Fido', age: 5 },
  ];
  const dog = dogs.map((dog) => <Dog key={dog.id} name={dog.name} age={dog.age} />);

  return <div>{dog}</div>;
}

export default DogList;
