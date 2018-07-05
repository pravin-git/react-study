import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LandingPage from './components/LandingPage';

const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) =>{
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count : state.count + 1
      };
      break;
    case 'DECREMENT':
      return {
        ...state,
        count : state.count - 1
      };
      break;
    default:
      return state;
      break;
  }

}

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
})

//console.log(store);

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <LandingPage/>
      </Provider>
    );
  }
}

export default App;
