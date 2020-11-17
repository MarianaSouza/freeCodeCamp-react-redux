//Another method you have access to on the Redux store object is store.subscribe(). 
//This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store. 

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

const increment = () => count += 1;

store.subscribe(increment)

store.dispatch({ type: ADD });
console.log(count); //1
store.dispatch({ type: ADD });
console.log(count); //2
store.dispatch({ type: ADD });
console.log(count); //3
