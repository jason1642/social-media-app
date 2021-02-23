class CreateJoinTableUsersComments < ActiveRecord::Migration[6.0]
  def change
    create_join_table :Users, :Comments do |t|
      # t.index [:user_id, :comment_id]
      # t.index [:comment_id, :user_id]
    end
  end
end