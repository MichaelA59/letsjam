class UsersController < ApplicationController
  # before_action :authorize_user
  before_action :configure_permitted_parameters, if: :devise_controller?


  def index
    @current_user = current_user
    @users = User.all
    @user = @current_user
  end

  def show
    @user = User.find(params[:id])
    @current_user = current_user
  end

  def edit
    @user = current_user
    @instrument_played = User::INSTRUMENTS
    @favorite_genre = User::FAVOTITE_GENRE
    @experience = User::YEARS
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to @user
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :username,
      :email,
      :is_student,
      :about_me,
      :profile_photo,
      :instruments_played,
      :favotorite_genre,
      :years_experience
    )
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
