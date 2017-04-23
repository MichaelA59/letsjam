class Instrument < ApplicationRecord
  validates :instrument, presence: true
  validates :skill, presence: true
end
