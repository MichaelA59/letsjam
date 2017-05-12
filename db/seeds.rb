# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Lesson.destroy_all

# Top 9 Teachers

User.create!(
  first_name: 'Michael',
  last_name: 'Adamski',
  email: 'michael.adamski@gmail.com',
  password: 'password',
  username: 'Mikea59',
  is_student: false,
  instruments_played: "Bass",
  favotorite_genre: "Prog-Rock",
  years_experience: 13,
  about_me: 'My name is Michael Adamski. I am currently accepting students for instruction in the Bass Guitar. I began
  as a self-taught musician but quickly progressed. I have played in multiple bands spanning many genres over the years and
  also have experience in music production, having built my own music studio. I have recorded over a dozen albums over the years
  and hope to bring you to a level where you can develop a mastery of your instrument!'
  )

User.create!(
  first_name: 'Dan',
  last_name: 'Shelb',
  email: 'Dan.Teach@gmail.com',
  password: 'password',
  username: 'Dan_the_Man',
  is_student: false,
  instruments_played: "Piano",
  favotorite_genre: "Blues",
  years_experience: 1,
  about_me: 'Hey! My name is Dan and I just graduated with a degree in teaching from Berklee school of Music where I specialized in Piano.
  I look forward to sharing what I have learned with all of you in the near future!'
  )

User.create!(
  first_name: 'Sarah',
  last_name: 'Chang',
  email: 'Sarah-Violin@gmail.com',
  password: 'password',
  username: 'SChang21',
  is_student: false,
  instruments_played: "Violin",
  favotorite_genre: "Classical",
  years_experience: 7,
  about_me: 'My name is Sarah Chang. I am classically trained in Violin and have a Masters Degree in Music Performance from Juliard. In
  addition, I have been traveling the world for the last 2 years as the lead Violinist in the St.Petersburg Philharmonic. I hope to empart
  the same zeal for learning in my students as many mentors have done for me through the years.'
  )

User.create!(
  first_name: 'Josh',
  last_name: 'Rinaldi',
  email: 'pizzaGuy@gmail.com',
  password: 'password',
  username: 'just_joshing',
  is_student: false,
  instruments_played: "Guitar",
  favotorite_genre: "Metal",
  years_experience: 3,
  about_me: 'I have been playing in slasher and heavy metal bands since High School. I am still somewhat new to music teaching but I am so
  far really having a blast! I look forward to expanding my student base in the near future! If you are interested in a lesson, please shoot me an email!'
  )

User.create!(
  first_name: 'Jessica',
  last_name: 'Aye',
  email: 'Aye.You!@gmail.com',
  password: 'password',
  username: 'JessiesGirl',
  is_student: false,
  instruments_played: "Saxophone",
  favotorite_genre: "Jazz",
  years_experience: 5,
  about_me: 'Hey, my name is Jessica, or Jessie for short. I have been playing gigs locally in Jazz Clubs for the last couple of years_experience
  I am currently looking for students from Monday Through Friday. Please Contact me if you have any Questions at Aye.You!@gmail.com!'
  )

User.create!(
  first_name: 'Sam',
  last_name: 'Crimmins',
  email: 'Sam.Crimmins@gmail.com',
  password: 'password',
  username: 'SammyBoy',
  is_student: false,
  instruments_played: "Drums",
  favotorite_genre: "Country",
  years_experience: 7,
  about_me: 'My name is Sam and I am a seasoned Drummer who began playing at an early age. I have been helping new students learn to play
  themselves for the past 7 years and currently have 3 new opening slots. If you are interested please email me'
  )

User.create!(
  first_name: 'Laura',
  last_name: 'Kincaid',
  email: 'kindness_kin@gmail.com',
  password: 'password',
  username: 'Kin_Kind',
  is_student: false,
  instruments_played: "Vocals",
  favotorite_genre: "Electronic",
  years_experience: 2,
  about_me: 'I am new to this and just tyring it out. I am currently offering lessons half off so please do not hesitate!'
  )

User.create!(
  first_name: 'Brian',
  last_name: 'Altman',
  email: 'alty_f_baby@gmail.com',
  password: 'password',
  username: 'AltyF',
  is_student: false,
  instruments_played: "Guitar",
  favotorite_genre: "Rock",
  years_experience: 8,
  about_me: 'I have been playing Guitar for many years now. I play both Electric and Acoustic, so which ever you are interested in
  I have experience in teacher. Hit me up to check on availabilities for lessons as slots do tend to fill up pretty fast!'
  )

# Top 3 Students

User.create!(
  first_name: 'Lauren',
  last_name: 'Beal',
  email: 'LaurBeal@gmail.com',
  password: 'password',
  username: 'Laralz',
  is_student: true,
  instruments_played: "Piano",
  favotorite_genre: "Rock",
  years_experience: 1,
  about_me: 'I am really interested in getting better at Piano and really hope to be able to write some original music in the very near future!'
  )

User.create!(
  first_name: 'Jake',
  last_name: 'Ryan',
  email: 'movieStar@gmail.com',
  password: 'password',
  username: 'JakeR10',
  is_student: true,
  instruments_played: "Guitar",
  favotorite_genre: "Rock",
  years_experience: 2,
  about_me: 'I have been playing Guitar for 2 years now but want to bring things to the next level. I am currently looking for a Guitar Teacher who will take me under their wing and show me the ropes. I really hope to start a band in the near future!'
  )

User.create!(
  first_name: 'Lucas',
  last_name: 'Manzi',
  email: 'Lu-Lu@gmail.com',
  password: 'password',
  username: 'ManziFan',
  is_student: true,
  instruments_played: "Bass",
  favotorite_genre: "Rock",
  years_experience: 1,
  about_me: 'I am a Bass player looking for a music instructor. Shoot me an email if you are interested in taking me up!'
  )
