json.array! @tracks do |track|
  json.title track.title
  json.artist track.artist.name
  json.album track.album.title
end
