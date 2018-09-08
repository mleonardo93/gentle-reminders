class Api::ItemsController < ApiController
  #before_action :authenticate_user!

  def index
    puts "Index called!"
    render json: {
      data: {
        items: current_user.items
      }
    }, status: 200
  end

  def create
    puts "Create method called"
    @user = User.find(params[:user_id])
    @item = @user.items.build(item_params)

    if @item.save
      render json: @item, status: 200
    else
      render json: @item.errors, status: 500
    end
  end

  def update
    puts "Update method called"
    @item = Item.find(params[:id])
    @item.assign_attributes(item_params)

    if @item.update(item_params)
      render json: @item, status: 200
    else
      render json: @item.errors, status: 500
    end
  end

  def destroy
    puts "Destroy method called"
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
