Rails.application.routes.draw do
  root to: "home#index", as: :home
  get "*path", to: "home#index", constraints: ->(request) do
    !request.url.include?("api")
  end

  namespace :api do
    resources :users, only: %i[show update]
  end

  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  resources :payments
  resources :carts, only: %i[create show update]

  post "/create-checkout-session", to: "checkout_session#create"

  resources :wishes, only: %i[
    update
    create
    destroy
  ]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
end
