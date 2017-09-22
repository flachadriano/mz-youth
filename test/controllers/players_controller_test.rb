require 'test_helper'

class PlayersControllerTest < ActionController::TestCase
  setup do
    @player = players(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:players)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create player" do
    assert_difference('Player.count') do
      post :create, player: { fseason_one: @player.fseason_one, name: @player.name, sell: @player.sell, season: @player.season, season_eight: @player.season_eight, season_five: @player.season_five, season_four: @player.season_four, season_seven: @player.season_seven, season_six: @player.season_six, season_three: @player.season_three, season_two: @player.season_two }
    end

    assert_redirected_to player_path(assigns(:player))
  end

  test "should show player" do
    get :show, id: @player
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @player
    assert_response :success
  end

  test "should update player" do
    patch :update, id: @player, player: { fseason_one: @player.fseason_one, name: @player.name, sell: @player.sell, season: @player.season, season_eight: @player.season_eight, season_five: @player.season_five, season_four: @player.season_four, season_seven: @player.season_seven, season_six: @player.season_six, season_three: @player.season_three, season_two: @player.season_two }
    assert_redirected_to player_path(assigns(:player))
  end

  test "should destroy player" do
    assert_difference('Player.count', -1) do
      delete :destroy, id: @player
    end

    assert_redirected_to players_path
  end
end
