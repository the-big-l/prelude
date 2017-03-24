import * as FPUtil from '../util/playlist_follow_util';

export const RECEIVE_FOLLOWED_PLAYLISTS = 'RECEIVE_FOLLOWED_PLAYLISTS';
export const RECEIVE_FOLLOWED_PLAYLIST = 'RECEIVE_FOLLOWED_PLAYLIST';
export const REMOVE_FOLLOWED_PLAYLIST = 'REMOVE_FOLLOWED_PLAYLIST';

export const receiveFollowedPlaylists = followedPlaylists => ({
  type:RECEIVE_FOLLOWED_PLAYLISTS,
  followedPlaylists
});

export const receiveFollowedPlaylist = playlist => ({
  type:RECEIVE_FOLLOWED_PLAYLIST,
  playlist
});

export const removeFollowedPlaylist = playlist => ({
  type:REMOVE_FOLLOWED_PLAYLIST,
  playlist
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
