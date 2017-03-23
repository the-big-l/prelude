import { RECEIVE_PLAYLISTS } from '../actions/playlist_actions';

const _emptyPlaylists = [];

const userPlaylistsReducer = (state = _emptyPlaylists, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return action.userPlaylists;
    default:
      return state;
  }
};

export default userPlaylistsReducer;
