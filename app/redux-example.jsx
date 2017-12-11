var redux = require('redux');

console.log('Starting Redux Example...');

var reducer = (state = {name: 'Anon'}, action) => {
  //state = state || {name: 'Anon'};

  //console.log('New Action: ', action);
  switch (action.type) {
    case 'CHANGE_NAME' :
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
    }

  return state;

  return state;
};
var store = redux.createStore(reducer, redux.compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = '<h1>' + state.name + '<h1>';
});

//unsubscribe();

var currentState = store.getState();

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jan'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ifke'
});
