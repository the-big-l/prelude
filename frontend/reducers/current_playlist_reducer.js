import { RECEIVE_PLAYLIST, RECEIVE_PLAYLIST_ERRORS } from '../actions/current_playlist_actions';
import { REMOVE_FOLLOWED_PLAYLIST, RECEIVE_FOLLOWED_PLAYLIST } from '../actions/playlist_follow_actions';
import merge from 'lodash/merge';

const _nullPlaylist = {
  errors: [],
  name: null,
  description: null,
  songs: [],
  author: null,
  id: null
};

const currentPlaylistReducer = (state = _nullPlaylist, action) => {
  Object.freeze(state)
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_PLAYLIST_ERRORS:
      const errors = action.errors;
      return merge({}, _nullPlaylist, {errors});
    case RECEIVE_PLAYLIST:
      return merge(newState, action.playlist)
    case REMOVE_FOLLOWED_PLAYLIST:
      return merge(newState, {following: false})
    case RECEIVE_FOLLOWED_PLAYLIST:
      return merge(newState, {following: true})
    default:
      return state;
  }
};

export default currentPlaylistReducer;
