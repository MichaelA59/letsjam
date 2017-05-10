class Api::V1::LessonsController < ApplicationController

  def index
    render json: Lesson.all
  end

  def create
  end

  def update
    # binding.pry
    Lesson.update(params[:id], student: current_user)
  end

end
