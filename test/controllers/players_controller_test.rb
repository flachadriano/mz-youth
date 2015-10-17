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
      post :create, player: { fsession_one: @player.fsession_one, name: @player.name, sell: @player.sell, session: @player.session, session_eight: @player.session_eight, session_five: @player.session_five, session_four: @player.session_four, session_seven: @player.session_seven, session_six: @player.session_six, session_three: @player.session_three, session_two: @player.session_two }
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
    patch :update, id: @player, player: { fsession_one: @player.fsession_one, name: @player.name, sell: @player.sell, session: @player.session, session_eight: @player.session_eight, session_five: @player.session_five, session_four: @player.session_four, session_seven: @player.session_seven, session_six: @player.session_six, session_three: @player.session_three, session_two: @player.session_two }
    assert_redirected_to player_path(assigns(:player))
  end

  test "should destroy player" do
    assert_difference('Player.count', -1) do
      delete :destroy, id: @player
    end

    assert_redirected_to players_path
  end
end
