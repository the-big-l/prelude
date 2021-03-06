import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const _defaultUsers = {
  users: [],
  currentUser: {
    first_name: 'loading',
    last_name: 'loading',
    id: 1,
    created_at: 'loading',
    playlist_count: 0
  }
};

const usersReducer = (state = _defaultUsers, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_USERS:
      const users = action.users;
      return merge({}, state, {users});
    case RECEIVE_USER:
      const currentUser = action.user;
      return merge({}, state, {currentUser});
    default:
      return state;
  }
};

export default usersReducer;
