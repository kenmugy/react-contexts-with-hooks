import uuid from 'uuid/v1';

export const peopleReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [
        ...state,
        {
          name: action.person.name,
          age: action.person.age,
          id: uuid()
        }
      ];
    case 'DELETE_PERSON':
      return state.filter(person => person.id !== action.id);
    default:
      return state;
  }
};
