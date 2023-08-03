const redux = require('redux');
// Redux store
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED';

// Action creator
function orderCake() {
    // Action
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}

const initialState = {
    numOfCakes: 10,
}

// Reducer:
// (previousState, action) => newState;
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log('Initial state', store.getState());

// Subscribe
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

// Dispatch
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

// Unsubscribe
unsubscribe();