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

  YEARS = [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
    [9, 9],
    [10, 10],
    [11, 11],
    [12, 12],
    [13, 13],
    [14, 14],
    [15, 15],
    [16, 16],
    [17, 17],
    [18, 18],
    [19, 19],
    [20, 20]
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
