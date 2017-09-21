class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :api_authentication, except: :api_login

  def api_login
    login = params['login']
    password = params['password']
    user = User.where(email: login).first
    if user && user.valid_password?(password)
      user.generate_token()
      render json: {auth_token: user.auth_token}
    else
      render json: {error: 'Login ou senha inválidos'}, status: 401
    end
  end

  def api_authentication
    auth_token = request.headers['Authorization']
    if auth_token
      user = User.where(auth_token: auth_token).first
      if user
        sign_in user, store: false
      else
        authenticate_user!
      end
    else
      authenticate_user!
    end
  end
end
