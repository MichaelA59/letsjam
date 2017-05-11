class Lesson < ApplicationRecord

  INSTRUMENTS = [
    ["Bass", "Bass"],
    ["Cello", "Cello"],
    ["Drums", "Drums"],
    ["Double Bass", "Double Bass"],
    ["Flute", "Flute"],
    ["Guitar", "Guitar"],
    ["Piano", "Piano"],
    ["Saxophone", "Saxophone"],
    ["Trumpet", "Trumpet"],
    ["Vocals", "Vocals"],
    ["Violin", "Violin"],
  ].freeze

  SKILL_LEVELS = [
    ["Beginner", "Beginner"],
    ["Intermediate", "Intermediate"],
    ["Advanced", "Advanced"]
  ].freeze

  validates :instrument, presence: true
  validates :skill_level, presence: true
  validates :date, presence: true

  belongs_to :teacher, class_name: "User", foreign_key: "teacher_id"
  belongs_to :student, class_name: "User", foreign_key: "student_id", optional: true
end
