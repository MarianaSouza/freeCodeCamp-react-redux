
//Define incAction and decAction action creators, the counterReducer(), INCREMENT and DECREMENT action types, and finally the Redux store. 
//Once you're finished you should be able to dispatch INCREMENT or DECREMENT actions to increment or decrement the state held in the store

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//action creators
const incAction = () => {
    return {
        type: INCREMENT
    }
};

const decAction = () => {
    return {
        type: DECREMENT
    }
};

//reducer to manage the state acoording to the action types
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state;
    }
};

const store = Redux.createStore(counterReducer);
