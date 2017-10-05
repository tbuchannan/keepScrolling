# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  email               :string           not null
#  session_token       :string           not null
#  password_digest     :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

FactoryGirl.define do
  # sequence(:user_id, 978){|n| "uid#{ n.to_s }"}

  factory :user, aliases:[:author, :followee, :follower], class: User do
    username { Faker::Internet.user_name(5..14) }
    email { Faker::Internet.email }
    password 'password'
  end
end
