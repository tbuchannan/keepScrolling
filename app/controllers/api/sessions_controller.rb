class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(params[:user][:email], params[:user][:password]);
    if @user
      login(@user)
    end
  end

  def destroy
    debugger
    logout if @current_user
    render {};
  end
end
