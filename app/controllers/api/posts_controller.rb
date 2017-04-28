class Api::PostsController < ApplicationController

  def index
    @posts = Post.includes(:author).all
  end

  def create
    @post = Post.create(post_params)
    if @post.save
      render :show
    else
      render(
      json: @post.errors.full_messages,
      status: 401
      )
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    

  end

  def edit

  end

  def update

  end

  def show
    @post = Post.find(params[:id])
  end

  def new

  end

  private
  def post_params
    params.require(:post).permit(
    :title, :author_id, :body, :summary,
    :source, :content, :image, :link_url, :author)
  end


end
