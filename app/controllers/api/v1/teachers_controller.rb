class Api::V1::TeachersController < ApplicationController

  def show
    # All Lessons created by THIS teacher
  end

  def index
    teachers = User.where(is_student: false)
    render json: teachers
  end

end
