class AddNotNullContraint < ActiveRecord::Migration[5.0]
  def change
    change_column :artists, :name, :string, null: false
  end
end
