import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Import createStore
import { createStore } from 'redux';

// Import Provider
import { Provider } from 'react-redux'


// Declare our reducer for our store
const reducer = (state = 0, action) => {
    console.log("Reducer: ", state, action);

    switch (action.type) {
        case "INCREASE":
            console.log(`Im am increasing the state from ${state} to ${state + 1}`);
            return state + 1;

        case "DECREASE":
            console.log(`Im am decreading the state from ${state} to ${state - 1}`);
            return state - 1;

        default:
            return state;

    }

}


// Create a store with our reducer as an argument
const store = createStore(reducer)


store.dispatch({ type: "INCREASE" })
store.dispatch({ type: "DECREASE" })


ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root'));
