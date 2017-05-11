class DeleteTutorshipTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :tutorships
  end
end
