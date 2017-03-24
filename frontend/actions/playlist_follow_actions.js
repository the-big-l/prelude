import * as FPUtil from '../util/playlist_follow_util';
import {requestPlaylist} from './current_playlist_actions';

export const RECEIVE_FOLLOWED_PLAYLISTS = 'RECEIVE_FOLLOWED_PLAYLISTS';
export const RECEIVE_FOLLOWED_PLAYLIST = 'RECEIVE_FOLLOWED_PLAYLIST';
export const REMOVE_FOLLOWED_PLAYLIST = 'REMOVE_FOLLOWED_PLAYLIST';

export const receiveFollowedPlaylists = followedPlaylists => ({
  type:RECEIVE_FOLLOWED_PLAYLISTS,
  followedPlaylists
});

export const receiveFollowedPlaylist = followedPlaylist => ({
  type:RECEIVE_FOLLOWED_PLAYLIST,
  followedPlaylist
});

export const removeFollowedPlaylist = followedPlaylist => ({
  type:REMOVE_FOLLOWED_PLAYLIST,
  followedPlaylist
});

// async
export const requestFollowedPlaylists = userId => dispatch => (
  FPUtil.fetchFollowedPlaylists(userId)
    .then(playlists => dispatch(receiveFollowedPlaylists(playlists)))
);

export const followPlaylist = playlistId => dispatch => (
  FPUtil.sendPlaylistFollow(playlistId)
    .then(playlist => dispatch(receiveFollowedPlaylist(playlist)))
);

export const unfollowPlaylist = playlistId => dispatch => (
  FPUtil.deletePlaylistFollow(playlistId)
    .then(playlist => dispatch(removeFollowedPlaylist(playlist)))
);
