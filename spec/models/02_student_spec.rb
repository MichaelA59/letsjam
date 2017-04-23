require 'rails_helper'

describe Student do
  it 'is valid with valid attributes' do
    mike = Student.new(
      first_name: 'Michael',
      last_name: 'Adamski',
      instrument: 'Guitar',
      skill_level: 'Beginner'
    )

    expect(mike.save).to eq(true)

  end

  it 'is not valid without a first name' do
    mike = Student.new(
      last_name: 'Adamski',
      instrument: 'Guitar',
      skill_level: 'Beginner'
    )

    expect(mike.save).to eq(false)
  end

  it 'is not valid without a last name' do
    mike = Student.new(
      first_name: 'Michael',
      instrument: 'Guitar',
      skill_level: 'Beginner'
    )

    expect(mike.save).to eq(false)
  end

  it 'is not valid without an instrument' do
    mike = Student.new(
      first_name: 'Michael',
      last_name: 'Adamski',
      skill_level: 'Beginner'
    )

    expect(mike.save).to eq(false)
  end

  it 'is not valid without a skill level' do
    mike = Student.new(
      first_name: 'Michael'
      last_name: 'Adamski',
      instrument: 'Guitar',
    )

    expect(mike.save).to eq(false)
  end
