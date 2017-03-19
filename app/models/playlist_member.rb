# == Schema Information
#
# Table name: playlist_members
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistMember < ApplicationRecord
  validates :playlist_id, :song_id, presence: true

  belongs_to :song
  belongs_to :playlist
end
