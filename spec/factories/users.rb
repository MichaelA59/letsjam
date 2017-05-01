require 'date'

FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "person#{n}@example.com" }
    first_name 'Bob'
    last_name 'Billbob'
    password 'password123'
    password_confirmation 'password123'
    zip '01108'
    username 'bobby12'
    is_student true
    confirmed_at DateTime.now
  end
end
