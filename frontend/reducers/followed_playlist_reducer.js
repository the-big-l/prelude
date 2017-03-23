import { RECEIVE_FOLLOWED_PLAYLISTS } from '../actions/followed_playlist_actions';

const _emptyList = [];

const followedPlaylistReducer = (state = _emptyList, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_FOLLOWED_PLAYLISTS:
      return action.followedPlaylists;
    default:
      return state;
  }
};

export default followedPlaylistReducer;
