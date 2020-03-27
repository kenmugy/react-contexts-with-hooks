import React from 'react';
import PeopleContextProvider from './contexts/PeopleContext';
import PeopleList from './components/PeopleList';
import PersonForm from './components/PersonForm';
function App() {
  return (
    <div className='app'>
      <PeopleContextProvider>
        <PersonForm />
        <PeopleList />
      </PeopleContextProvider>
    </div>
  );
}

export default App;
