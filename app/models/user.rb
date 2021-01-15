class User < ApplicationRecord
  belongs_to :groups_joined
  belongs_to :comments
  belongs_to :posts_made
end
