json.extract! user, :id, :username, :first_name, :last_name, :avatar_url, :created_at
json.playlist_count user.playlists.count
