class AddXToTables < ActiveRecord::Migration
  def change
    add_column :tables, :x, :string
  end
end
