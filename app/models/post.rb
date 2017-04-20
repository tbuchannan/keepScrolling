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

class Post < ApplicationRecord
  validates :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"
end
