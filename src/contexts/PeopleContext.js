import React, { createContext, useReducer } from 'react';
import { peopleReducer } from '../reducers/peopleReducer';

export const PeopleContext = createContext();

function PeopleContextProvider({ children }) {
  const [people, dispatch] = useReducer(peopleReducer, [
    {
      id: 0,
      name: 'Ryu',
      age: 32,
      alive: true
    },
    {
      id: 1,
      name: 'Yoshi',
      age: 18,
      alive: false
    },
    {
      id: 2,
      name: 'james woods',
      age: 43,
      alive: true
    },
    {
      id: 3,
      name: 'owen ahrgs',
      age: 12,
      alive: true
    }
  ]);
  return (
    <PeopleContext.Provider value={{ people, dispatch }}>
      {children}
    </PeopleContext.Provider>
  );
}

export default PeopleContextProvider;
