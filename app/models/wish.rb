class Wish < ApplicationRecord
  belongs_to :user
  has_many :cart_items

  has_one_attached :image
end
