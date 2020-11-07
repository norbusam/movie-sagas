import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
// Import axios
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery ('GET_MOVIES', getMovies);
    yield takeEvery ('GET_GENRES', getGenres)
}
// a generator function that makes an axios get to the genre database and
// set the genres reducer state to the action.payload(all the genres)
function* getGenres(){
    try {
        const genreResponse = yield axios.get('/api/genre');
        yield put({type: 'SET_GENRES', payload: genreResponse.data})
    } catch (error) {
        console.log('error in genre GET', error)
    }
}

// a generator function that makes a axios get for all movies in Database
// and set movies reducer's state to action.payload(all the movies)
function* getMovies(){
    try {
        const moviesResponse = yield axios.get('/api/movie');
        yield put({type: 'SET_MOVIES', payload: moviesResponse.data});
    } catch (error) {
        console.log('error in movie GET', error);
    }
    
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
