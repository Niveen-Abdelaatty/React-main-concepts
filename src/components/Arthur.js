function Arthur() {
  const Arthur = {
    name: 'Arthur Bernier',
    age: '35',
    email: 'ceo@arthurbernierjr.com',
  };
  // Object.keys(Arthur) returns array of strings that are keys of the object's properties
  // map returns an array of results of calling the function on each element in the keys array
  const arthurDetails = Object.keys(Arthur).map((key) => {
    return (
      <div>
        {key} : {Arthur[key]}
      </div>
    );
  });

  // the function call
  return <div>{arthurDetails}</div>;
}

export default Arthur;
