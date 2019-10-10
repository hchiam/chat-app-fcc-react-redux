// socket setup to communicate with network

import * as types from '../constants/ActionTypes';
import { addUser, messageReceived, populateUsersList } from '../actions';

const setupSocket =(dispatch, username)=> {
  const socket = new WebSocket('ws://localhost:8989');

  // when client joins server
  socket.onopen =()=> {
    // will broadcast username to all clients
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: username,
    }));
  };

  // when receive MESSAGE FROM SERVER
  socket.onmessage =(event)=> {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case types.ADD_MESSAGE: // received message from server
        // dispatch custom action in src/actions/index.js
        dispatch(messageReceived(data.message, data.author));
        break;
      case types.ADD_USER: // received new user from server
        // add that user to local copy of users array:
        dispatch(addUser(data.name));
        break;
      case types.USERS_LIST: // got list of users from server
        dispatch(populateUsersList(data.users));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
