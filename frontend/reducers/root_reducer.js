import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import playerReducer from './player_reducer';
import songListReducer from './song_list_reducer';
import playlistReducer from './playlist_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  player: playerReducer,
  songList: songListReducer,
  userPlaylists: playlistReducer
});

export default rootReducer;
