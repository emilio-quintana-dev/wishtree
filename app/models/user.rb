class User < ApplicationRecord
  include ActiveModel::Serialization

  has_secure_password

  has_one :cart

  has_many :wishes

  has_one_attached :avatar

  validates_presence_of :email
  validates_uniqueness_of :email

  enum account_type: {
    gifter: 0,
    receiver: 1,
  }
end
