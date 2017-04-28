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

class Follow < ApplicationRecord
  validates :followee, :follower, presence: true
  validates :follower, uniqueness: { scope: :followee }

  belongs_to :followee,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: "User"

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: "User"

end
