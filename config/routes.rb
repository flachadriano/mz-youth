Rails.application.routes.draw do
  devise_for :users

  resources :players

  post "apis/users/sign_in", to: "application#api_login"
  root to: "players#index"
end
