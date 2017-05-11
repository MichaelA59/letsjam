class Api::V1::LessonsController < ApplicationController

  def index
    lessons = Lesson.all.order("created_at DESC")
    render json: lessons
  end

  def create
  end

  def update
    Lesson.update(params[:id], student: current_user)
  end

end
