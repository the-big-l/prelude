json.array! @playlist_follows do |follow|
  json.partial! 'api/playlists/playlist', playlist: follow.playlist
end
