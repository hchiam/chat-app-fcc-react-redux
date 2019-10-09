/**
 * MESSAGES REDUCER
 */

import * as types from '../constants/ActionTypes';

const messages =(state=[], action)=> {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
      // concat to the current state
      return state.concat([
        {
          message: action.message, // add message
          author: action.author,
          id: action.id,
        }
      ]);
    default:
      // just return the current state
      return state;
  }
};

export default messages;
