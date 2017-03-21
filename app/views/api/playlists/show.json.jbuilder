json.extract! @playlist, :id, :name, :description
json.songs @playlist.songs, partial: 'api/songs/song', as: :song
