class AddTrackNoToTracks < ActiveRecord::Migration[5.0]
  def change
    add_column :tracks, :track_no, :integer
  end
end
