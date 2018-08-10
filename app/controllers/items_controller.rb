class ItemsController < ApplicationController
  def create
    @user = User.find(params[:user_id])
    @item = @user.items.build(item_params)

    if @item.save
      flash[:notice] = "Item was saved."
      redirect_back fallback_location: @user
    else
      flash.now[:alert] = "There was an error saving the item. Please try again."
      redirect_back fallback_location: @user
    end
  end

  def destroy
    @item = Item.find(params[:id])

    if @item.destroy 
      flash.now[:notice] = "Task marked done."
    else
      flash.now[:alert] = "Task unable to be marked done. Please try again."
    end

  end

  private
  def item_params
    params.require(:item).permit(:name, :due)
  end

end
