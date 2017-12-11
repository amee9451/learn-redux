var redux = require('redux');

console.log('Starting Redux Example...');

var reducer = (state = {name: 'Anon'}, action) => {
  //state = state || {name: 'Anon'};

  console.log('New Action: ', action);
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
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState: ', currentState)


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jan'
});
console.log('Name after dispatch: ', store.getState());
