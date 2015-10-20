class AddPositionOnPlayer < ActiveRecord::Migration
  def change
    add_column :players, :position_id, :integer, null: false
  end
end
