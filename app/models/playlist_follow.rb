# == Schema Information
#
# Table name: playlist_follows
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistFollow < ApplicationRecord
end
