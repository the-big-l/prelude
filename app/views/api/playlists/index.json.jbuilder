json.array! @playlists do |playlist|
  json.id playlist.id
  json.name playlist.name
  json.description playlist.description
  json.created_at playlist.created_at
  json.song_count playlist.songs.count
end
