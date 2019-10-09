/**
 * USERS REDUCER
 */

import * as types from '../constants/ActionTypes';

const users =(state=[], action)=> {
  switch (action.type) {
    case types.ADD_USER:
      return state.concat([
        {
          name: action.name,
          id: action.id,
        }
      ]);
    case types.USERS_LIST:
      // turn the state into the users list
      return action.users;
    default:
      // did not add user or ask for users list
      return state;
  }
};

export default users;
