class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :comments, through: :posts

  validates :username, presence: true, uniqueness: true
  validates :email, allow_nil: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validate :image
  validates :password, length: { minimum: 6, allow_nil: true }
  def return_data
    {
      id: id,
      username: username,
      email: email,
      created_at: created_at,
      updated_at: updated_at
    }
  end
end