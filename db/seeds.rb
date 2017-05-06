# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Lesson.destroy_all


teach=User.create(email: 'teach@bue.edu', password: 'hahacows', password_confirmation: 'hahacows', username: 'teach', first_name: 'teach', last_name: 'teach', is_student: false, zip: '02134')

lesson=Lesson.create(instrument: 'guitar', skill_level: 'beginner', date: 'idk', teacher_id: teach.id)

george=User.create(email: 'george53@bu.edu', password: 'hahacows', password_confirmation: 'hahacows', username: 'haha', first_name: 'haha', last_name: 'haha', is_student: true, zip: '01234')

Tutorship.create(lesson: lesson, user: george)

binding.pry
