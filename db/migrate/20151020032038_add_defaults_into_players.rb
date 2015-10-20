class AddDefaultsIntoPlayers < ActiveRecord::Migration
  def change
    change_column :players, :sell, :boolean, default: false
    change_column :players, :session_one, :boolean, default: false
    change_column :players, :session_two, :boolean, default: false
    change_column :players, :session_three, :boolean, default: false
    change_column :players, :session_four, :boolean, default: false
    change_column :players, :session_five, :boolean, default: false
    change_column :players, :session_six, :boolean, default: false
    change_column :players, :session_seven, :boolean, default: false
    change_column :players, :session_eight, :boolean, default: false
  end
end
