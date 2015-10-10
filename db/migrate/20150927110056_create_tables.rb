class CreateTables < ActiveRecord::Migration
  def change
    create_table :tables do |t|
      t.integer :restaurant_id
      t.string :status
      t.string :capacity

      t.timestamps null: false
    end
  end
end
