FactoryBot.define do
  factory :user do
    nickname              { Faker::Name.initials }
    email                 { Faker::Internet.free_email }
    password = Faker::Internet.password(min_length: 8, max_length: 20)
    password              { password }
    password_confirmation { password }
    birthday              { Faker::Date.between(from: '1930-01-01', to: '2015-12-31') }
  end
end
