# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :songs
  has_many :albums
end
