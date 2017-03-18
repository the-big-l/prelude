# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :name, :user_id, presence: true

  belongs_to :user
  has_many :playlist_members
  has_many :tracks,
    through: :playlist_members,
    source: :track
end
