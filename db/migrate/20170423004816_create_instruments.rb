class CreateInstruments < ActiveRecord::Migration[5.0]
  def change
    create_table :instruments do |t|
      t.string  :instrument, null: false
      t.integer :skill,      null: false

      t.timestamps
    end
  end
end
