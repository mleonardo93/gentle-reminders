class UsersController < ApplicationController
  def current_user_home
    if current_user
      redirect_to user_path(current_user.id)
    else
      redirect_to home_index_path
    end
  end
  
  def show
    @user = User.find(params[:id])
  end
end
