class UsersController < ApplicationController
  before_action :authorize_user
  before_action :configure_permitted_parameters, if: :devise_controller?


  def index
    # @users = current_user
    # if @user.is_student?
    #   @users = User.where(is_student: true)
    # else
    #   @users = User.where(is_student: false)
    # end
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    # @students = @user.students
  end

  def edit
    @user = current_user
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(user_params)
    if @user.save
      redirect_to @user
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :is_student, :zip, :mobile, :about_me)
  end

  protected

  def authorize_user
    if !user_signed_in?
      raise ActionController::RoutingError.new("Please Log in to view this page")
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :profile_photo
  end

end
