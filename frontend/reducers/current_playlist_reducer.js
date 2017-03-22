import { RECEIVE_PLAYLIST, RECEIVE_PLAYLIST_ERRORS } from '../actions/playlist_actions';
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
    default:
      return state;
  }
};

export default currentPlaylistReducer;
