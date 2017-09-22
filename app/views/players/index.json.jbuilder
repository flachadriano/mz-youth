json.array!(@players) do |player|
  json.extract! player, :id, :name, :season, :position_id, :sell, 
      :season_one, :season_two, :season_three, :season_four, 
      :season_five, :season_six, :season_seven, :season_eight
  json.position_name player.position.name
  json.url player_url(player, format: :json)
end
