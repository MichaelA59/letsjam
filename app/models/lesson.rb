class Lesson < ApplicationRecord

  INSTRUMENTS = [
    ["Guitar", "Guitar"],
    ["Bass", "Bass"],
    ["Drums", "Drums"],
    ["Piano", "Piano"],
    ["Vocals", "Vocals"],
    ["Saxaphone", "Saxaphone"]
  ].freeze

  SKILL_LEVELS = [
    ["Beginner", "Beginner"],
    ["Intermediate", "Intermediate"],
    ["Advanced", "Advanced"]
  ].freeze

  DATE = [
    ["Today", "Today"],
    ["Tomorrow", "Tomorrow"],
    ["In a Week", "In a Week"],
  ].freeze

  validates :instrument, presence: true
  validates :skill_level, presence: true
  validates :date, presence: true

  belongs_to :teacher, class_name: "User", foreign_key: "teacher_id"
  belongs_to :student, class_name: "User", foreign_key: "student_id"
end
