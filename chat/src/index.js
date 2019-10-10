import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// set up Redux:
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'; // our custom Redux reducer
// import { addUser } from './actions'; // one of our custom actions

// set up Redux-Saga:
import createSagaMiddleware from 'redux-saga';
import handleNewMessage from './sagas';
import username from './utils/name';

// set up web socket to communicate with network:
import setupSocket from './sockets'

const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(
  reducers, // renamed variable from "chat"
  applyMiddleware(sagaMiddleware) // initialize this middleware
);

// initialize socket so we can reference it in the sage middleware
const socket = setupSocket(store.dispatch, username); // (see setupSocket in src/sockets/index.js)

// note: handleNewMessage saga
sagaMiddleware.run(handleNewMessage, {socket, username});

ReactDOM.render(
  // wrap App in Redux Provider:
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// registerServiceWorker();
