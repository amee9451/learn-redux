var redux = require('redux');

console.log('Starting Redux Example...');

var reducer = (state = {name: 'Anon'}, action) => {
  //state = state || {name: 'Anon'};

  return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState: ', currentState)
