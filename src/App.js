import React from 'react';
import PeopleContextProvider from './contexts/PeopleContext';
import PeopleList from './components/PeopleList';
function App() {
  return (
    <div className='app'>
      <PeopleContextProvider>
        <PeopleList />
      </PeopleContextProvider>
    </div>
  );
}

export default App;
