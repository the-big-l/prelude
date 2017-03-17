import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import playerReducer from './player_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  player: playerReducer
});

export default rootReducer;
