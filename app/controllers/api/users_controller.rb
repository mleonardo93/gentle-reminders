class Api::UsersController < ApiController
  #before_action :authenticate_user!

  def index
    puts "Hello@@@@@@@@@@@"
    render json: {
      data: {
        message: "Welcome, #{current_user.username}",
        user: current_user
      }
    }, status: 200
  end
end