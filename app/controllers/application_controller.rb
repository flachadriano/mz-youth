class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

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
end
