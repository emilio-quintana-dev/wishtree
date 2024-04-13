user = User.create!(
  email: "hello@test.com",
  password: "password",
  password_confirmation: "password",
  account_type: 1,
  username: "test123",
)

10.times do
  Wish.create!(
    name: Faker::Commerce.product_name,
    price: Faker::Commerce.price,
    user_id: user.id,
  )
end
