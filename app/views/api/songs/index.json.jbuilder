json.array! @songs do |song|
  json.title song.title
  json.artist song.artist.name
  json.album song.album.title
end
