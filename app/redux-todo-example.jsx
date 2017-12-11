var redux = require('redux');

console.log('Starting Redux Todo Example...');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.value
      }
    default:
      return state;
  };
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('Starting State: ', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  value: 'dog'
});
console.log('Updated Search State: ', store.getState());
