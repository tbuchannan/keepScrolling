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
  validate :not_following_self
  validates :followee, :follower, presence: true
  validates :follower_id, uniqueness: { scope: :followee_id }

  belongs_to :followee,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: "User"

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: "User"


    private
    def not_following_self
      if (self.followee_id == self.follower_id)
        errors.add(:base, "Follower_id and Followee_id cannot be the same")
      end
    end

end
