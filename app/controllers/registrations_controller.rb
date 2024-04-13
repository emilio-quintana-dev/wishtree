class RegistrationsController < ApplicationController
  def create
    if user.persisted?
      session[:user_id] = user.id

      render json: { status: :created, user: user.to_api.serializable_hash }
    elsif user.errors.any?
      render json: { status: 500 }
    else
      render json: { status: 500 }
    end
  end

  def user
    @user ||= User.create(
      email: params["email"],
      password: params["password"],
      password_confirmation: params["passwordConfirmation"],
      account_type:,
      username: Faker::Internet.username,
    )
  end

  def account_type
    if params["isGifter"] == true
      User.account_types[:gifter]
    else
      User.account_types[:receiver]
    end
  end
end
