import { useState } from 'react';

// Controlled Forms: The value of the inputs are bound to state, so value of state and the value of the inputs are always in sync.
function ControlledForm() {
  // object holding form values as state
  const [form, setForm] = useState({ name: '', age: 0 });

  // handleChange function that updates the state when we type into the form
  const handleChange = (e) => {
    // that updating format to keep the form object's structure
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handleSubmit function to handle form submission and do what you want with the data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder='write name here'
        />
        <input
          type='number'
          name='age'
          value={form.age}
          onChange={handleChange}
          placeholder='write age here'
        />
        <input type='submit' value='Submit Form' />
      </form>
    </div>
  );
}

export default ControlledForm;
