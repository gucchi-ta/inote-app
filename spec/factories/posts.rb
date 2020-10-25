FactoryBot.define do
  factory :post do
    memo    { Faker::Name.initials }
    user    # userとのアソシエーション
  end
end
