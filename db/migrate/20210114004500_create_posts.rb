class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :description
      t.reference :user_id
      t.string :image
      t.int :total_comments
      t.int :total_votes
      t.reference :group

      t.timestamps
    end
  end
end
