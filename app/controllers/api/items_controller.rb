class Api::ItemsController < ApiController
  #before_action :authenticate_user!

  def index
    if current_user 
      render json: {
        data: {
          items: current_user.items
        }
      }, status: 200
    end
  end

  def create
    @user = User.find(params[:user_id])
    @item = @user.items.build(item_params)

    if @item.save
      render json: @item, status: 200
    else
      render json: @item.errors, status: 500
    end
  end

  def update
    @item = Item.find(params[:id])
    @item.assign_attributes(item_params)

    if @item.update(item_params)
      render json: @item, status: 200
    else
      render json: @item.errors, status: 500
    end
  end

  def destroy
    @item = Item.find(params[:id])

    if @item.destroy
      render json: {status: 200}
    else
      render json: @item
    end
  end

  private
  def item_params
    params.require(:item).permit(:name, :due, :complete)
  end
end
