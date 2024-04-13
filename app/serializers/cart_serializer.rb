class CartSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :cart_items,
  )

  def cart_items
    object.cart_items.map do |cart_item|
      cart_item.to_api.serializable_hash
    end
  end
end
