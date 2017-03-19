class RenameTracksIdToSongsId < ActiveRecord::Migration[5.0]
  def change
    rename_column :playlist_members, :track_id, :song_id
  end
end
