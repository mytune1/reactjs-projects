import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore , applyMiddleware,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import nameReducer from './Reducer/nameReducer'
import wishReducer from './Reducer/wishReducer'

const masterCombine =combineReducers(
    {
        name:nameReducer,
        wish:wishReducer
    })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(masterCombine,{name:'CP',wish:['eat','sleep']},composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
