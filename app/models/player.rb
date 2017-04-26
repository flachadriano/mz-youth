class Player < ActiveRecord::Base
  belongs_to :position

  validates :name,        presence: true
  validates :session,     numericality: {greather_than: 100, less_than: 100}
  validates :position_id, presence: true
  validates :sell, :session_one, :session_two, :session_three, :session_four,
            :session_five, :session_six, :session_seven, :session_eight,
            inclusion: [true, false]

  def age
    System::SESSION - self.session
  end

  # return how much sessions the player is on ManagerZone
  # the player starts with 16, so if he has 17, he is one session on MZ
  def mz_sessions
    age - System::JUNIOR_START_AGE
  end

  def goalkeeper?
    self.position_id == Position.first.try(:id)
  end

end
