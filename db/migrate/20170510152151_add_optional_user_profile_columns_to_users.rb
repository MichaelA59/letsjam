class AddOptionalUserProfileColumnsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :instruments_played, :string
    add_column :users, :favotorite_genre, :string
  end
end
