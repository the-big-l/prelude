import * as PlayerUtil from '../util/playlist_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';

export const receivePlaylists = userPlaylists => ({
  type:RECEIVE_PLAYLISTS,
  userPlaylists
});

export const receivePlaylist = playlist => ({
  type:RECEIVE_PLAYLIST,
  playlist
});

export const receivePlaylistErrors = errors => ({
  type:RECEIVE_PLAYLIST_ERRORS,
  errors
});

// async
export const createPlaylist = playlist => dispatch => (
  PlayerUtil.sendPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)))
    .fail(errors => dispatch(receivePlaylistErrors(errors)))
);

export const requestUserPlaylists = user => dispatch => (
  PlayerUtil.fetchUserPlaylists(user)
    .then(userPlaylists => dispatch(receivePlaylists(userPlaylists)))
);

export const requestPlaylist = playlist => dispatch => (
  PlayerUtil.fetchPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)))
    .then(playlist => dispatch(receiveSongList(playlist.songs)))
);

export const addToPlaylist = playlistMember => dispatch => {
  PlayerUtil.sendPlaylistMember(playlistMember);
};
