class LessonsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create]
  before_action :authorize_admin, only: [:edit, :update, :destroy]

  def index
    @user = current_user
    @lessons = Lesson.order('created_at DESC')
      if params[:search]
        @lessons = Lesson.search(params[:search]).order("created_at DESC")
      else
        @lessons = Lesson.all.order("created_at DESC")
      end
  end

  def show
    @lesson = Lesson.find(params[:id])
    @user = current_user
  end

  def new
    @lesson = Lesson.new
    @instrument_collection = Lesson::INSTRUMENTS
    @skill_level_collection = Lesson::SKILL_LEVELS

  end

  def create
    @user = current_user
    teacher_id = @user.id
    @lesson = Lesson.new(lesson_params)
    @lesson.teacher_id = @user.id
    if @lesson.save

      flash[:notice] = 'Lesson added successfully!'
      redirect_to @user
    else

      @instrument_collection = Lesson::INSTRUMENTS
      @skill_level_collection = Lesson::SKILL_LEVELS
      @date_collection = Lesson::DATE
    end
  end

  def edit
    @lesson = Lesson.find(params[:id])
    @instrument_collection = Lesson::INSTRUMENTS
    @skill_level_collection = Lesson::SKILL_LEVELS
  end

  def update
    @lesson = Lesson.find(params[:id])
    if @lesson.update_attributes(lesson_params)
      redirect_to lessons_path(@lesson)
    else
      @instrument_collection = Lesson::INSTRUMENTS
      @skill_level_collection = Lesson::SKILL_LEVELS
      @date_collection = Lesson::DATE
      render :edit
    end
  end

  def destroy
    @lesson = Lesson.find(params[:id])
    @lesson.destroy

    redirect_to lessons_path
  end

  private

  def lesson_params
    params.require(:lesson).permit(:instrument, :skill_level, :date, :teacher_id)
  end

  # def authorize_user
  #   if !user_signed_in?
  #     raise ActionController::RoutingError.new("Please Sign-in to view this page")
  #   end
  # end
  #
  # def authorize_admin
  #   if !user_signed_in? || !current_user.admin?
  #     raise ActionController::RoutingError.new("Not Found")
  #   end
  # end
end
