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
    yield takeEvery ('GET_MOVIES', getMoviesSaga);
    yield takeEvery ('GET_GENRES', getGenresSaga);
    yield takeEvery ('MOVIE_DETAIL', getMovieDetailSaga);
    yield takeEvery ('ADD_MOVIE', addMovieSaga);
}
// adding a movie to the database with saga
function* addMovieSaga(action){
    try {
        yield console.log('movies posting data is:',action.payload);
        yield axios.post('/api/movie', action.payload);
        yield put({type:'GET_MOVIES'})
    } catch (error) {
        console.log('error in POST', error);
    }
}
// a generator function that makes an axios GET to server and
// set the genres reducer state to the action.payload(genres from the DB)
function* getGenresSaga(){
    try {
        const genreResponse = yield axios.get('/api/genre');
        yield put({type: 'SET_GENRES', payload: genreResponse.data})
    } catch (error) {
        console.log('error in genre GET', error)
    }
}

// a generator function that makes a axios GET to server
// and set movies reducer's state to action.payload(movies from DB)
function* getMoviesSaga(){
    try {
        const moviesResponse = yield axios.get('/api/movie');
        yield put({type: 'SET_MOVIES', payload: moviesResponse.data});
    } catch (error) {
        console.log('error in movie GET', error);
    }
    
}

function* getMovieDetailSaga(action) {
    try {
        yield console.log('payload being to grab one movie is',action.payload)
        const movieDetailResponse = yield axios.get(`/api/movie/${action.payload}`);
        yield put({type: 'SET_DETAIL', payload: movieDetailResponse.data})
        
    } catch (error) {
        console.log('error in movieDetail GET', error)
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

// Used to store a specific movie for detail
const movieDetail = (state=[], action) => {
    switch (action.type) {
        case "SET_DETAIL":
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
        movieDetail
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
