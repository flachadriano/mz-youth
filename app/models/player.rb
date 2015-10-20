class Player < ActiveRecord::Base
  belongs_to :position

  validates :name,        presence: true
  validates :session,     numericality: {greather_than: 100, less_than: 100}
  validates :position_id, presence: true
  validates :sell, :session_one, :session_two, :session_three, :session_four,
            :session_five, :session_six, :session_seven, :session_eight,
            inclusion: [true, false]
end
