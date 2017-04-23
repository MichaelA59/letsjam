class CreateStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :students do |t|
      t.string  :first_name, null: false
      t.string  :last_name,  null: false
      t.string  :location,   null: false
      t.boolean :mobile,     null: false

      t.timestamps
    end
  end
end
