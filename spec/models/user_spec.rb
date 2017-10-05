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

require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'validations' do
    subject(:student) { FactoryGirl.build(:user) }

    it { should validate_presence_of :username }
    it { should validate_presence_of :email }
    it { should validate_presence_of :password_digest }
    it { should validate_presence_of :session_token }

    it { should validate_uniqueness_of :username}
    it { should validate_uniqueness_of :email  }

    it { should validate_length_of(:password).is_at_least(6) }

    it {should have_many :posts}
    it {should have_many :followers}
    it {should have_many :followees}

  end
end
