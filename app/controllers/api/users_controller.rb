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

  def potential_followers
    @potentials = User.find(params[:id]).potential_followers
  end

  def followed_posts
    @posts = User.find(params[:id]).followed_posts
  end

  def random_post
    @post = User.find(params[:id]).random_post
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
