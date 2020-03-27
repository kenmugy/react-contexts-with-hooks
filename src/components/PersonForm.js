import React, { useState, useContext } from 'react';
import { PeopleContext } from '../contexts/PeopleContext';

function PersonForm() {
  const [person, setPerson] = useState({
    name: '',
    age: ''
  });

  const { dispatch } = useContext(PeopleContext);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_PERSON', person });
    setPerson({
      name: '',
      age: ''
    });
  };
  return (
    <div>
      <h1>add person</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={person.name}
          onChange={e => setPerson({ ...person, name: e.target.value })}
        />
        <br />
        <label htmlFor='number'>Age</label>
        <input
          type='number'
          id='number'
          value={person.age}
          onChange={e => setPerson({ ...person, age: e.target.value })}
        />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default PersonForm;
