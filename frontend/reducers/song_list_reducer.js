import { POPULATE_SONG_LIST } from '../actions/song_list_actions';

const _emptySongList = [];

const songListReducer = (state = _emptySongList, action) => {
  Object.freeze(state)
  switch(action.type) {
    case POPULATE_SONG_LIST:
      return action.songList;
    default:
      return state;
  }
};

export default songListReducer;
