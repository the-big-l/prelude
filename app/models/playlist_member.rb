# == Schema Information
#
# Table name: playlist_members
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  track_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistMember < ApplicationRecord
  validates :playlist_id, :track_id, presence: true

  belongs_to :track
  belongs_to :playlist
end
