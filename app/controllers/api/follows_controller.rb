class Api::FollowsController < ApplicationController

  def index
    @followees = Follow.includes(:followee, :follower).where(follower_id: params[:user_id])
    render "/api/follows/index"
  end

  def create
    @follow = Follow.create(follow_params);
    if @follow.save
      render :show
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy!
    render :show
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
