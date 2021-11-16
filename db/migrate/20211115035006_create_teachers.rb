class CreateTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :teachers do |t|
      t.string :firstname
      t.string :lastname
      t.integer :age
      t.integer :grade

      t.timestamps
    end
  end
end
