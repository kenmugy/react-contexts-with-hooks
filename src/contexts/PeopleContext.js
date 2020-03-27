import React, { createContext, useReducer } from 'react';
import { peopleReducer } from '../reducers/peopleReducer';

export const PeopleContext = createContext();

function PeopleContextProvider({ children }) {
  const [people, dispatch] = useReducer(peopleReducer, []);
  return (
    <PeopleContext.Provider value={{ people, dispatch }}>
      {children}
    </PeopleContext.Provider>
  );
}

export default PeopleContextProvider;
