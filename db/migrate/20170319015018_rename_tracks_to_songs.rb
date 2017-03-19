class RenameTracksToSongs < ActiveRecord::Migration[5.0]
  def change
    rename_table :tracks, :songs
  end
end
