class Api::V1::StudentsController < ApplicationController

  def show
    # Booked Lesson
  end

  def index
    students = User.where(is_student: true)
    render json: students
  end

end
