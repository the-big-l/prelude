class CreatePlaylistMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_members do |t|
      t.integer :playlist_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end
    add_index :playlist_members, :playlist_id
    add_index :playlist_members, :track_id
  end
end
