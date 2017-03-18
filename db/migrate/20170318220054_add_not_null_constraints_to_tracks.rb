class AddNotNullConstraintsToTracks < ActiveRecord::Migration[5.0]
  def change
    change_column :tracks, :track_url, :string, null: false
    change_column :tracks, :track_no, :integer, null: false

  end
end
