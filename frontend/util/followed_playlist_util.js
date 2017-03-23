export const fetchFollowedPlaylists = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/playlist_follows'
  });
};

export const sendPlaylistFollow = playlistFollow => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlist_follows',
    data: playlistFollow
  });
};

export const deletePlaylistFollow = playlistFollowId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlist_follows/${playlistFollowId}`
  });
};
