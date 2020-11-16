//Retrieve the current state held in the Redux store object with the getState() method.

const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
let currentState = store.getState();
console.log(currentState) //5