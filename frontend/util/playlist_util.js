export const fetchUserPlaylists = (user) => {
  return $.ajax({
    method: 'GET',
    url: `api/playlists?user=${user.id}`
  });
}

export const sendPlaylistMember = (playlist_member) => {
  return $.ajax({
    method: 'POST',
  	url: 'api/playlist_members',
  	data: playlist_member
  });
};

export const doNothing = () => {};
