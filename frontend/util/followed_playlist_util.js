export const fetchFollowedPlaylists = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/playlist_follows?user=${userId}`
  });
};

export const sendPlaylistFollow = playlistFollow => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlist_follows',
    data: playlistFollow
  });
};

export const deletePlaylistFollow = playlistId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlist_follows?playlist=${playlistId}`
  });
};
