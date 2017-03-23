class AddUniqueIndexToPlaylistFollows < ActiveRecord::Migration[5.0]
  def change
    add_index :playlist_follows, [:playlist_id, :user_id], unique: true
  end
end
