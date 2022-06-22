
100.times do
    Product.create(
      name: Faker::Commerce.product_name,
      price: Faker::Number.between(from: 1, to: 150),
      description: Faker::Commerce.department)
end