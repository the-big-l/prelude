import * as Playlist from '../util/playlist_util';
import { populateSongList } from './song_list_actions.js';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_SONG = 'REMOVE_SONG';

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

export const deletePlaylistMember = member => ({
  type:REMOVE_SONG,
  member
})

// async
export const createPlaylist = playlist => dispatch => (
  Playlist.sendPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)))
    .fail(errors => dispatch(receivePlaylistErrors(errors)))
);

export const requestUserPlaylists = user => dispatch => (
  Playlist.fetchUserPlaylists(user)
    .then(userPlaylists => dispatch(receivePlaylists(userPlaylists)))
);

export const requestPlaylist = playlistId => dispatch => (
  Playlist.fetchPlaylist(playlistId)
    .then(playlist => {
      dispatch(receivePlaylist(playlist));
      dispatch(populateSongList(playlist.members));
    })
);

export const removeSong = memberId => dispatch => (
  Playlist.deletePlaylistMember(memberId)
    .then(member => dispatch(deletePlaylistMember(member)))
);

export const addToPlaylist = playlistMember => dispatch => {
  Playlist.sendPlaylistMember(playlistMember);
};
