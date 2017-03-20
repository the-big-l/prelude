json.array! @songs do |song|
  json.id song.id
  json.title song.title
  json.artist song.artist.name
  json.album song.album.title
  json.src song.song_url
end
