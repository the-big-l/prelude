import { sendPlaylistMember, fetchUserPlaylists } from '../util/playlist_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';

export const receivePlaylists = userPlaylists => ({
  type:RECEIVE_PLAYLISTS,
  userPlaylists
});

// async
export const requestUserPlaylists = (user) => dispatch => (
  fetchUserPlaylists(user)
    .then(userPlaylists => dispatch(receivePlaylists(userPlaylists)))
);

export const addToPlaylist = (playlistMember) => dispatch => {
  sendPlaylistMember(playlistMember);
};


export const doNothing = () => {};
