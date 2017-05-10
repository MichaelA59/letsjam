class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: User.all
  end

  def show
    profileUser = User.find(params[:id])
    @user = current_user

    if profileUser.is_student
      lessons = profileUser.lessons_as_student
      lesson_info = {
        student: profileUser,
        currentUser: @user,
        lessons: lessons
      }
      render json: lesson_info
    else
      lessons = profileUser.lessons_teaching
      lesson_info = {
        teacher: profileUser,
        currentUser: @user,
        lessons: lessons
      }
      render json: lesson_info
    end
  end
end
