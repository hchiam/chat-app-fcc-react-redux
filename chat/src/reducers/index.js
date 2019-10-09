/**
 * THIS FILE WILL COMBINE TWO REDUCERS INTO ONE REDUCER
 */

import { combineReducers } from 'redux';
import messages from './messages'; // messages.js reducer
import users from './users'; // users.js reducer

const chat = combineReducers({
  messages,
  users,
});

export default chat;
// aside note on export default: // https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript
