class RenameTrackUrlToSongsUrl < ActiveRecord::Migration[5.0]
  def change
    rename_column :songs, :track_url, :song_url
  end
end
