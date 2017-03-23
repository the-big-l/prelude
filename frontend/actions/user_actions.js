import * as UserUtil from '../util/user_util';
import {requestUserPlaylists} from './current_playlist_actions';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = users => ({
  type:RECEIVE_USERS,
  users
});

export const receiveUser = user => ({
  type:RECEIVE_USER,
  user
});


// async
export const requestUsers = user => dispatch => (
  UserUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
);

export const requestUser = userId => dispatch => (
  UserUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
    .then(res => dispatch(requestUserPlaylists(res.user)))
);
