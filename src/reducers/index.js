import { combineReducers } from 'redux';
import notes from './notesReducer';
import user from './userReducer';
import loading from './loadingReducer';

export default combineReducers({
  user,
  notes,
  loading
});