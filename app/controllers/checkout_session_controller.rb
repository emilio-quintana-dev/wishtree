class CheckoutSessionController < ApplicationController
  Stripe.api_key = ENV["STRIPE_SECRET_KEY"]

  def create
    session = Stripe::Checkout::Session.create(
      {
        line_items: [{
          price_data: {
            currency: "usd",
            product_data: {
              name: wish_name,
            },
            tax_behavior: "exclusive",
            unit_amount: wish_price,
          },
          quantity: wish_quantity,
        }],
        mode: "payment",
        success_url: "#{ENV['FRONTEND_DOMAIN']}/checkout?success=true",
        cancel_url: "#{ENV['FRONTEND_DOMAIN']}/checkout?canceled=true",
        automatic_tax: { enabled: true },
      },
    )

    redirect_to(session.url, allow_other_host: true)
  end

  def wish_name
    params["name"]
  end

  def wish_price
    params["price"].to_i * 100
  end

  def wish_quantity
    params["quantity"].to_i
  end
end
