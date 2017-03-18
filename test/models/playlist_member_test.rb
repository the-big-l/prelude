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

require 'test_helper'

class PlaylistMemberTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
