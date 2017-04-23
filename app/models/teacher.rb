class Teacher < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :location, presence: true
  validates :mobile, presence: true
end
