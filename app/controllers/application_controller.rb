class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  helper_method :current_user_can_edit?, :words_translate

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:account_update, keys: [:password, :password_confirmation, :current_password])
  end

  def current_user_can_edit?(event)
    user_signed_in? && event.user == current_user
  end

  def words_translate(words)
    I18n.t "#{words}"
  end
end
