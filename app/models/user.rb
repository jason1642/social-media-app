class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :comments, through: :posts

  validate :username, presence: true, uniqueness: true
  validate :email, presence: true, uniqueness: true
  validate :image, presence: true, uniqueness: true
  validate :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validate :password, length: { minimum: 6 }
  def return_data
    {
      id: id,
      username: username,
      email: email,
      image: image,
      created_at: created_at,
      updated_at: updated_at
    }
  end
end