class Api::V1::LessonsController < ApplicationController


  def index
    render json: Lesson.all
  end

  def show
    # teacher = User.find(params[:id])
    # render json: user
    # lessons = Lesson.where(user: user)
    # respond_with lessons
    # lesson_data = { user: user, lessons: lessons }
    # respond_with lesson_data
    # respond_with Lesson.all.order("created_at DESC")
  end
end
