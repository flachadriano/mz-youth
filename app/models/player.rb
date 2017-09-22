class Player < ActiveRecord::Base
  belongs_to :position

  validates :name,        presence: true
  validates :season,      numericality: {greather_than: 100, less_than: 100}
  validates :position_id, presence: true
  validates :sell, :season_one, :season_two, :season_three, :season_four,
            :season_five, :season_six, :season_seven, :season_eight,
            inclusion: [true, false]

  def age
    System::SEASON - self.season
  end

  # return how much seasons the player is on ManagerZone
  # the player starts with 16, so if he has 17, he is one season on MZ
  def mz_seasons
    age - System::JUNIOR_START_AGE
  end

  def goalkeeper?
    self.position_id == Position.first.try(:id)
  end

end
