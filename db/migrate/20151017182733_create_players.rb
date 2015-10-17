class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name
      t.integer :session
      t.boolean :sell
      t.boolean :fsession_one
      t.boolean :session_two
      t.boolean :session_three
      t.boolean :session_four
      t.boolean :session_five
      t.boolean :session_six
      t.boolean :session_seven
      t.boolean :session_eight

      t.timestamps null: false
    end
  end
end
