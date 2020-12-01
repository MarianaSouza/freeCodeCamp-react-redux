// Immutable state means that you never modify state directly, instead, you return a new copy of state.

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:

const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // Don't mutate state:
      return [...state].concat(action.todo);
    //Or : return [...state, action.todo]
    default:
      return state;
  }
};


const store = Redux.createStore(immutableReducer);
