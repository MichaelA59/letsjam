class Api::V1::StudentsController < Api::V1::BaseController


  def index
    respond_with User.where(is_student: true)
    # render json: { student: Student.all}
  end


end
