import { combineReducers } from 'redux-immutable';
import users from './users';
import posts from './posts';
import messageEntry from './messageEntry';

export default combineReducers({
  users,
  posts,
  messageEntry
});