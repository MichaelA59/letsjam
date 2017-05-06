class Api::V1::UsersController < Api::V1::BaseController
  def index
    respond_with Lesson.all
  end
end
