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
  subject(:follow) { FactoryGirl.build(:follow) }

  it { should validate_presence_of :followee }
  it { should validate_presence_of :follower }

  it { should validate_uniqueness_of(:follower_id).scoped_to(:followee_id) }
end
