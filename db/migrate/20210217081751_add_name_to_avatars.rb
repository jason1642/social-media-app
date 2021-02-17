class AddNameToAvatars < ActiveRecord::Migration[6.0]
  def change
    add_column :avatars, :name, :string
  end
end
