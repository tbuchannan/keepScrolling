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
    @user = User.find(params[:id])
    @potentials = User.where.not(id: @user.followees.pluck(:followee_id)).where.not(id: @user.id).order('random()').limit(10)
  end

  def followed_posts
    @user = User.find(params[:id])
    @posts = Post.where(author_id: @user.followees.pluck(:followee_id)).or(Post.where(author_id: @user.id)).order(:updated_at)
  end

  def random_post
    @user = User.find(params[:id])
    @post = Post.all.where.not(author_id: @user.id).where(content: "photo").sample
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
