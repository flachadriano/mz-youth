class RenameSessionToSeason2 < ActiveRecord::Migration
  def change
    rename_column :players, :session, :season
  end
end
