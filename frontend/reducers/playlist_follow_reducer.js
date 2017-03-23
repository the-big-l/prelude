import { RECEIVE_FOLLOWED_PLAYLISTS } from '../actions/playlist_follow_actions';

const _emptyList = [];

const playlistFollowReducer = (state = _emptyList, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_FOLLOWED_PLAYLISTS:
      return action.followedPlaylists;
    default:
      return state;
  }
};

export default playlistFollowReducer;
