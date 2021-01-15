class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.boolean :status
      t.string :profile_picture, limit: 20
      t.references :groups_joined, null: false, foreign_key: true
      t.references :comments, null: false, foreign_key: true
      t.references :posts_made, null: false, foreign_key: true

      t.timestamps
    end
  end
end
