class Api::V1::LessonsController < ApplicationController

  def index
    render json: Lesson.all
  end

  def create
  end

  def update
  end

end
