export const peopleReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [...state, action.person];
    case 'DELETE_PERSON':
      return state.filter(person => person.id !== action.id);
    default:
      return state;
  }
};
