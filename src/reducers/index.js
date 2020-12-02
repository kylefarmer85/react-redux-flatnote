import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  usersReducer,
  notesReducer
});