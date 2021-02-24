class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :comments, through: :posts

  validates :username, :presence => true, uniqueness: true
  validates :email, uniqueness: true
  # validates :image, allow_nil: true, uniqueness: false
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, allow_nil: true
  validates :password, length: { minimum: 6 }
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