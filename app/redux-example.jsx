var redux = require('redux');

console.log('Starting Redux Example...');

var stateDefault = {
  name: 'Anon',
  hobbies: [],
  movies: []
}

var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action) => {
  //state = state || {name: 'Anon'};

  //console.log('New Action: ', action);
  switch (action.type) {
    case 'CHANGE_NAME' :
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.value
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter(hobby => hobby.id !== action.id)
      }
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      };
    default:
      return state;
    };
};
var store = redux.createStore(reducer, redux.compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = '<h1>' + state.name + '<h1>';

  console.log('New state:', state);
});

//unsubscribe();

var currentState = store.getState();

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jan'
});

store.dispatch({
  type: 'ADD_HOBBY',
  value: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  value: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2,
  value: 'Running'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ifke'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Star Wars',
  genre: 'sci-fi'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'The Notebook',
  genre: 'romance'
});
