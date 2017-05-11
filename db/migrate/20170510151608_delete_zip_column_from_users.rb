class DeleteZipColumnFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :zip
    remove_column :users, :mobile
  end
end
