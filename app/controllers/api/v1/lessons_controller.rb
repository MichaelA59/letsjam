class Api::V1::LessonsController < Api::V1::BaseController
  def index
    respond_with Lesson.all
  end
end
