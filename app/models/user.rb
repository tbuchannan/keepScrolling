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

class User < ApplicationRecord
  validates :username, :email, :session_token, :password_digest, presence: true
  validates :username, length: {maximum: 32, too_long: "is too long. Please enter %{count} or fewer characters." }
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :avatar, default_url: "default-avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/


  has_many :posts,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "Post"

  has_many :followers,
    foreign_key: :followee_id,
    primary_key: :id,
    class_name: "Follow"

  has_many :followees,
    foreign_key: :follower_id,
    primary_key: :id,
    class_name: "Follow"


  after_initialize :ensure_session_token

  attr_reader :password

  def password=(password)
    @password = password;
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email);
    return @user if @user && @user.is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16);
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def potential_followers
    User.where.not(id: self.followees.pluck(:followee_id)).where.not(id: self.id).order('random()').limit(10)
  end

  def followed_posts
    Post.where(author_id: self.followees.pluck(:followee_id)).or(Post.where(author_id: self.id)).order(:updated_at)
  end

  def random_post
    Post.all.where.not(author_id: self.id).where(content: "photo").sample
  end

end
