class CreateTutorships < ActiveRecord::Migration[5.0]
  def change
    create_table :tutorships do |t|
      t.belongs_to :lesson
      t.belongs_to :user

      t.timestamps
    end
  end
end
