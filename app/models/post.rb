# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  title              :string
#  content            :string
#  body               :text
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  summary            :text
#  source             :text
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Post < ApplicationRecord
  validates :author_id, presence: true
  has_attached_file :image, default_url: "default-avatar.png"
  validates_attachment_content_type :image, content_type: [/\Aimage\/.*\Z/, 'audio/mp3','audio/mpeg']

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"
end
