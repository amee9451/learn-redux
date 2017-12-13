var redux = require('redux');

console.log('Starting Redux Example...');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state:', state);

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location.</a>'
  }
});

//unsubscribe();

var currentState = store.getState();

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changName('Jan'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changName('Ifke'));

store.dispatch(actions.addMovie('Star Wars', 'Sci-Fi'));
store.dispatch(actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.removeMovie(1));
