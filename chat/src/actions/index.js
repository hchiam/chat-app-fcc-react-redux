import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
let nextUserId = 0;

/**
 * FOUR ACTIONS
 */

// when you send a message
export const addMessage =(message, author)=> ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message, // ES6 JS property shorthand for {message: message}
  author,
}); // ES6 JS arrow function shorthand for returning

export const addUser =(name)=> ({
  type: types.ADD_USER,
  id: nextUserId++,
  name,
});

// when someone else sends a message
export const messageReceived =(message, author)=> ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author,
});

export const populateUsersList =(users)=> ({
  type: types.USERS_LIST,
  users,
});
