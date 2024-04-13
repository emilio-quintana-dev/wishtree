class CartItemSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :name,
    :image_url,
    :price,
    :quantity,
  )

  def image_url
    object.wish.image.url
  end
end
