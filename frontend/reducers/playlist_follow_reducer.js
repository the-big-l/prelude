import { RECEIVE_FOLLOWED_PLAYLISTS } from '../actions/playlist_follow_actions';

const _emptyList = [];

const playlist_follow_reducer = (state = _emptyList, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_FOLLOWED_PLAYLISTS:
      return action.followedPlaylists;
    default:
      return state;
  }
};

export default playlist_follow_reducer;
