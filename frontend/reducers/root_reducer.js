import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import playerReducer from './player_reducer';
import songListReducer from './song_list_reducer';
import userPlaylistReducer from './user_playlist_reducer';
import currentPlaylistReducer from './current_playlist_reducer';
import usersReducer from './users_reducer';
import followedPlaylistReducer from './followed_playlist_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  player: playerReducer,
  listItems: songListReducer,
  userPlaylists: userPlaylistsReducer,
  currentPlaylist: currentPlaylistReducer,
  users: usersReducer,
  followedPlaylists: followedPlaylistReducer
});

export default rootReducer;
