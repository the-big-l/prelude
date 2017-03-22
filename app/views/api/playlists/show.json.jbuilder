json.extract! @playlist, :id, :name, :description
json.author @playlist.user.username
json.members @playlist.playlist_members do |member|
  json.id member.id
  json.song member.song, partial: 'api/songs/song', as: :song
end
