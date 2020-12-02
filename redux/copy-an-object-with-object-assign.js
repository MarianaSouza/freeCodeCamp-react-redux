//Make shallow copies of objects by passing an empty object as the first argument followed by the object(s) you want to copy.
//This creates newObject as a new object, which contains the properties that currently exist in obj1 and obj2.
//const newObject = Object.assign({}, obj1, obj2);

const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ONLINE':
      // Don't mutate state:
      return Object.assign({}, state, { status: "online" })
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
