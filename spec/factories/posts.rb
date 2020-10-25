FactoryBot.define do
  factory :post do
    memo    { Faker::Lorem.sentence }
    user    # userとのアソシエーション
  end
end
