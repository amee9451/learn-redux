var redux = require('redux');

console.log('Starting Redux Example...');

var stateDefault = {
  name: 'Anon',
  hobbies: [],
  movies: []
}

var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'Anon', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.value
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter(hobby => hobby.id !== action.id);
    default:
      return state
  };
};

var movieReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.id)
    default:
      return state;
  };
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: movieReducer
});

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

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
