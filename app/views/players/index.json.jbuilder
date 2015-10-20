json.array!(@players) do |player|
  json.extract! player, :id, :name, :session, :position_id, :sell, :session_one, :session_two, :session_three, :session_four, :session_five, :session_six, :session_seven, :session_eight
  json.url player_url(player, format: :json)
end
