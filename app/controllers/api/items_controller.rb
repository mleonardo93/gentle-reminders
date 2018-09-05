class Api::ItemsController < ApiController
  #before_action :authenticate_user!

  def index
    puts current_user.items
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

  private
  def item_params
    params.require(:item).permit(:name, :due)
  end
end
