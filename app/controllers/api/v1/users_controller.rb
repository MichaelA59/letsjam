class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: User.all
  end

  def show
    teacher = User.find(params[:id])
    @user = current_user

    lessons = teacher.lessons_teaching

    lesson_info = {
      teacher: teacher,
      currentUser: @user,
      lessons: lessons
    }
    render json: lesson_info
  end
end
