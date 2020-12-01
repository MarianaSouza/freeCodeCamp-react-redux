const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state:
      return [
        ...state.slice(0, action.index), //from index 0 until the one that is being removed without including it (slice does not include the end)
        ...state.slice(action.index + 1, state.length) //concat with the next item after the removed index + all the other array items 
      ]
    // or return state.slice(0, action.index).concat(state.slice(action.index + 1, state.length));
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
