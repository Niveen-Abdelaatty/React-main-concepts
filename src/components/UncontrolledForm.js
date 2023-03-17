import { useRef } from 'react';

// Uncontrolled Forms: The forms are not bound by state, instead their values are pulled using a ref when needed.

function UncontrolledForm() {
  // useRef to get access to a DOM node like an input
  // create a new ref, and then assign it to the form input
  const inputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <form>
        <input type='text' ref={inputRef} />
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
