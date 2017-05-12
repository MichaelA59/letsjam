class RegistrationsController < Devise::RegistrationsController
  protected

  def after_sign_up_path_for(resource)
    @user = current_user
    "/users/#{@user.id}/edit"
  end
end
