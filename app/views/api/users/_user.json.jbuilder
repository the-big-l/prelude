json.extract! user, :id, :username, :first_name, :last_name, :created_at
json.playlist_count user.playlists.count
