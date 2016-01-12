Rails.application.routes.draw do
  devise_for :users

  get "players/seasonup", controller: :players, action: :seasonup

  resources :players

  root to: "players#index"
end
