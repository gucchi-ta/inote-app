class PostsController < ApplicationController
  before_action :move_to_index, except: [:index, :show]
  def index
    @posts = Post.includes(:user).order('created_at DESC')
  end

  # def show
  #   @post = Post.find(params[:id])
  # end

  def new
    # binding.pry
    @post = Post.new
  end

  def create
    # binding.pry
    @post = Post.new(post_params)
    if @post.valid?
      @post.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    # binding.pry
    @post = Post.find(params[:id])
  end

  def update
    # binding.pry
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    redirect_to root_path
  end

  private

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end

  def post_params
    params.require(:post).permit(:memo, :image).merge(user_id: current_user.id)
  end
end
