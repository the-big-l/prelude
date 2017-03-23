import {
  RECEIVE_FOLLOWED_PLAYLISTS,
  RECEIVE_FOLLOWED_PLAYLIST,
  REMOVE_FOLLOWED_PLAYLIST} from '../actions/playlist_follow_actions';
import merge from 'lodash/merge';

const _emptyList = [];

const playlistFollowReducer = (state = _emptyList, action) => {
  Object.freeze(state)
  const newState = state.slice();
  switch(action.type) {
    case RECEIVE_FOLLOWED_PLAYLISTS:
      return action.followedPlaylists;
    case RECEIVE_FOLLOWED_PLAYLIST:
      newState.push(action.followedPlaylist);
      return newState;
    case REMOVE_FOLLOWED_PLAYLIST:
      return newState.filter(pl => (pl.id !== action.followedPlaylist.id));
    default:
      return state;
  }
};

export default playlistFollowReducer;
