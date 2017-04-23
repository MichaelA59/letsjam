class CreateTeachers < ActiveRecord::Migration[5.0]
  def change
    create_table :teachers do |t|
      t.string  :first_name, null: false
      t.string  :last_name,  null: false
      t.string  :location,   null: false
      t.boolean :mobile,     null:false
      t.text    :bio        

      t.timestamps
    end
  end
end
