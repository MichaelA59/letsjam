class Lesson < ApplicationRecord
  validates :instrument, presence: true
  validates :skill_level, presence: true
  validates :date, presence: true

  belongs_to :teacher, class_name: "User", foreign_key: "teacher_id"

  has_many :tutorships
  has_many :users, through: :tutorships, foreign_key: "student_id"
end
