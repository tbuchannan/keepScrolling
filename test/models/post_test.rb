# == Schema Information
#
# Table name: posts
#
#  id           :integer          not null, primary key
#  title        :string
#  content_type :string
#  body         :text
#  photo_url    :string
#  link_url     :string
#  audio_url    :string
#  video_url    :string
#  quote_url    :string
#  author_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
