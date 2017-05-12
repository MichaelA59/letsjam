class AddColumnsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :years_experience, :integer
  end
end
