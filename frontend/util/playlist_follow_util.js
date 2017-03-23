export const fetchFollowedPlaylists = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/playlist_follows?user=${userId}`
  });
};

export const sendPlaylistFollow = playlistId => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlist_follows',
    // playlistFollow: {playlist_id: 1}
    data: {playlist_follow: {playlist_id: playlistId}}
  });
};

export const deletePlaylistFollow = playlistId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlist_follows/-1?playlist=${playlistId}`
  });
};
