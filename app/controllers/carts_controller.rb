class CartsController < ApplicationController
  def create
    cart = Cart.create!(user:)

    if wish
      CartItem.create!(cart:, wish:)
    end

    render json: { id: cart.id }, status: :created
  end

  def show
    if cart
      render json: cart.to_api.serializable_hash
    else
      head :not_found
    end
  end

  private

  def cart
    Cart.find_by(id: params[:id])
  end

  def user
    User.find_by(id: params[:user_id])
  end

  def wish
    Wish.find_by(id: params[:wish_id])
  end
end
