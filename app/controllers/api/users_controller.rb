class Api::UsersController < ApiController
  #before_action :authenticate_user!

  def index
    if current_user 
      render json: {
        data: {
          message: "Welcome, #{current_user.username}",
          user: current_user
        }
      }, status: 200
    end
  end
end