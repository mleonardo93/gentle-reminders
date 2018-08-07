class ItemsController < ApplicationController
  def create
    @user = User.find(params[:user_id])
    @item = @user.items.new
    @item.name = params[:item][:name]
    @item.due = params[:item][:due]

    if @item.save
      flash[:notice] = "Item was saved."
      redirect_back fallback_location: @user
    else
      flash.now[:alert] = "There was an error saving the item. Please try again."
      redirect_back fallback_location: @user
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    item = @user.items.find(params[:id])

    item.destroy 
    flash[:notice] = "Task marked done."
    render json: item

  end

end
