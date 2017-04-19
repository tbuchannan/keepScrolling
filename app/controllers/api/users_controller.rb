class Api::UsersController < ApplicationController

  def create
    @user = User.create(user_params);
    if @user.save
      render :show
    else
      render :error
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end