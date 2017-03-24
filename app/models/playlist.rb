# == Schema Information
#
# Table name: playlists
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#

class Playlist < ApplicationRecord
  validates :name, :description, :user_id, presence: true

  belongs_to :user
  has_many :playlist_members, dependent: :destroy
  has_many :songs,
    through: :playlist_members,
    source: :song
  has_many :playlist_follows, dependent: :destroy
  has_many :followers,
    through: :playlist_follows,
    source: :user
end
