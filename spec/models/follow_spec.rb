# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  followee_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Follow, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
