/**
 * REDUX-SAGA MIDDLEWARE
 * to add username to action and send to web socket
 * so it can be dispatched to all clients
 */

import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

// note: function* = generator function (uses yield instead of return)
const handleNewMessage = function* handleNewMessage(params) {
  // note: takeEvery comes from redux-saga
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    action.author = params.username;
    params.socket.send(JSON.stringify(action));
  }); // take every "add message" action, and send message to web socket
};

export default handleNewMessage;
