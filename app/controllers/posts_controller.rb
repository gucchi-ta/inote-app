class PostsController < ApplicationController
  before_action :move_to_index, except: [:index, :everyone, :search]
  def index
    # @posts = Post.includes(:user).order('created_at DESC')
    @posts = Post.where('user_id LIKE ?', current_user.id.to_s).order('created_at DESC') if user_signed_in?
    @everyone_posts = Post.where('grobal LIKE ?', '1').order('created_at DESC')
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
    @post.hert = false
    @post.grobal = false
    if @post.valid?
      # @post.save(hert: false)
      # @post.save(grobal: false)
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

  def hert
    # binding.pry
    post = Post.find(params[:id])
    if post.hert
      post.update(hert: false)
    else
      post.update(hert: true)
    end

    item = Post.find(params[:id])
    render json: { post: item }
  end

  def grobal
    # binding.pry
    post = Post.find(params[:id])
    if post.grobal
      post.update(grobal: false)
    else
      post.update(grobal: true)
    end

    item = Post.find(params[:id])
    render json: { post: item }
  end

  def everyone
    @posts = Post.where('grobal LIKE ?', '1').order('created_at DESC')
  end

  def search
    @posts = Post.search(params[:keyword])
  end

  def my_search
    # binding.pry
    post = Post.my_search(params[:keyword])
    @posts = post.where('user_id LIKE ?', current_user.id.to_s)
  end

  def favorite
    @posts = Post.where('user_id LIKE ? and hert LIKE ?', current_user.id.to_s, '1').order('created_at DESC') if user_signed_in?
  end

  private

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end

  def post_params
    params.require(:post).permit(:memo, :image, :hert, :grobal).merge(user_id: current_user.id)
  end
end
