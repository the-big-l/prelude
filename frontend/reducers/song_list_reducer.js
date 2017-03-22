import { POPULATE_SONG_LIST } from '../actions/song_list_actions';
import { REMOVE_SONG, ADD_TO_LIST } from '../actions/playlist_actions';

const _emptySongList = [];

const songListReducer = (state = _emptySongList, action) => {
  Object.freeze(state)
  const newState = state.slice();
  switch(action.type) {
    case POPULATE_SONG_LIST:
      return action.listItems;
    case ADD_TO_LIST:
      newState.push(action.listItem);
      return newState;
    case REMOVE_SONG:
      return state.filter(listItem => (listItem.member_id !== action.member.id));
    default:
      return state;
  }
};

export default songListReducer;
