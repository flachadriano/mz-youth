class RenameSessionToSeason < ActiveRecord::Migration
  def change
    rename_column :players, :session_one, :season_one
    rename_column :players, :session_two, :season_two
    rename_column :players, :session_three, :season_three
    rename_column :players, :session_four, :season_four
    rename_column :players, :session_five, :season_five
    rename_column :players, :session_six, :season_six
    rename_column :players, :session_seven, :season_seven
    rename_column :players, :session_eight, :season_eight
  end
end
