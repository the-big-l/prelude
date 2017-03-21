json.extract! @playlist, :id, :name, :description
json.author @playlist.user.username
json.songs @playlist.songs, partial: 'api/songs/song', as: :song
