json.extract! @playlist, :id, :name, :description, :image_url
json.author @playlist.user.username
json.members @playlist.playlist_members.order(:created_at) do |member|
  json.member_id member.id
  json.playlist_id member.playlist_id
  json.song member.song, partial: 'api/songs/song', as: :song
end
json.following @playlist.followers.include?(current_user)
