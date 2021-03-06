# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  song_url   :string           not null
#  track_no   :integer          not null
#

class Song < ApplicationRecord
  validates :title, :artist_id, :album_id, presence: true

  belongs_to :artist
  belongs_to :album
  has_many :playlist_members
  has_many :playlists,
    through: :playlist_members,
    source: :playlist
end
