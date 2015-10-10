class AddYToTables < ActiveRecord::Migration
  def change
    add_column :tables, :y, :string
  end
end
