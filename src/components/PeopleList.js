import React, { useContext } from 'react';
import { PeopleContext } from '../contexts/PeopleContext';

function People() {
  const { people, dispatch } = useContext(PeopleContext);

  const handleDelete = id => dispatch({ type: 'DELETE_PERSON', id });
  return (
    <div>
      {people &&
        people.map(({ id, name, age }) => (
          <div key={id}>
            <h1>{name}</h1> - <span>{id}</span>
            <h3>{age}</h3>
            <button onClick={() => handleDelete(id)}>del</button>
          </div>
        ))}
    </div>
  );
}

export default People;
