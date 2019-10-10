import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// initialize Redux:
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chat from './reducers'; // our custom Redux reducer
import { addUser } from './actions'; // one of our custom actions
const store = createStore(chat);

store.dispatch(addUser('Me'));

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
