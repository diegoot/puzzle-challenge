import { combineReducers } from 'redux';
import labyrinthReducer from './labyrinth';

export default combineReducers({
  labyrinth: labyrinthReducer
});
