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
var store = redux.createStore(reducer, redux.compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
));

store.subscribe(() => {
  var state = store.getState();
  document.getElementById('app').innerHTML = '<h1>' + state.searchText + '<h1>';
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  value: 'dog'
});
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  value: 'cat'
});
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  value: 'bird'
});
