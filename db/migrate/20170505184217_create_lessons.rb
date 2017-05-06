class CreateLessons < ActiveRecord::Migration[5.0]
  def change
    create_table :lessons do |t|
      t.string :instrument, null: false
      t.string :skill_level, null: false
      t.string :date, null: false
      t.integer :teacher_id, null: false
      t.integer :student_id

      t.timestamps
    end
  end
end
