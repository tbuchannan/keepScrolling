class Api::FollowsController < ApplicationController

  def index
    # debugger
    @followees = Follow.all
  end

  def create
    # debugger
    @follow = current_user.followers.create(followee_id: params[:user_id])

    if @follow.save
      render :show
    end
  end



  def destroy
    @follow = current_user.follows.find_by(followee_id: params[:user_id])
    @follow.destroy!
    render :show
  end
end
