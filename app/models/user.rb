class User < ApplicationRecord

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

  FAVOTITE_GENRE = [
    ["Alternative Rock", "Alternative Rock"],
    ["Blues", "Blues"],
    ["Classical", "Classical"],
    ["Country", "Country"],
    ["Dubstep", "Dubstep"],
    ["Electronic", "Electronic"],
    ["EDM", "EDM"],
    ["Gospel", "Gospel"],
    ["Hip-Hop", "Hip-Hop"],
    ["Indie", "Indie"],
    ["Jazz", "Jazz"],
    ["Metal", "Metal"],
    ["Pop", "Pop"],
    ["Punk", "Punk"],
    ["Prog-Rock", "Prog-Rock"],
    ["Reggae", "Reggae"],
    ["Rock", "Rock"],
  ].freeze


  mount_uploader :profile_photo, ProfilePhotoUploader

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, email: true, uniqueness: { message: "An account already exists for that email address!" }
  validates :username, presence: true, uniqueness: { message: "An account already exists for that email address!" }
  validates_inclusion_of :is_student, in: [true, false]

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  has_many :students, class_name: "User", foreign_key: 'teacher_id', through: :lessons
  has_many :teachers, class_name: "User", foreign_key: 'student_id', through: :lessons

  has_many :lessons_teaching, class_name: "Lesson", foreign_key: 'teacher_id'
  has_many :lessons_as_student, class_name: "Lesson", foreign_key: 'student_id'
end
