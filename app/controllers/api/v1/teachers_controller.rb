class Api::V1::TeachersController < ApplicationController

  def show
    teacher = User.find(params[:id])
    lessons = Lesson.where(teacher_id: teacher)
    render json: lessons
  end

  def index
    teachers = User.where(is_student: false)
    render json: teachers
  end

end
