class AddDescriptionToPlaylists < ActiveRecord::Migration[5.0]
  def change
    add_column :playlists, :description, :text
  end
end
