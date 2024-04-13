class CartItem < ApplicationRecord
  belongs_to :cart
  belongs_to :wish

  delegate :name, to: :wish
  delegate :image, to: :wish
  delegate :price, to: :wish
end
