class Api::UsersController < ApplicationController

  def create
    @user = User.create(user_params);
    if @user.save
      render :show
    else
      render(
        json: @user.errors.full_messages,
        status: 401
      )
    end
  end

  def show
    @user = User.find(params[:id])
    render "/api/users/show"
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
