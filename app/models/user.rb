class User < ApplicationRecord
  has_secure_password
  has_many :comments, through: :posts

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
  def return_data
    {
      id: id,
      username: username,
      email: email,
      created_at: created_at,
      updated_at: updated_at,
      comments_posted: comments,
      posts_made: Post.where(user_id: id)
    }
  end
end