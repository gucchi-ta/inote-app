class PostsController < ApplicationController
  before_action :move_to_index, except: [:index, :everyone, :search, :show_everyone]
  def index
    @posts = Post.where('user_id LIKE ?', current_user.id.to_s).order('created_at DESC') if user_signed_in?
    @everyone_posts = Post.where('grobal LIKE ?', '1').order('created_at DESC')
  end

  def favorite
    @posts = Post.where('user_id LIKE ? and hert LIKE ?', current_user.id.to_s, '1').order('created_at DESC') if user_signed_in?
  end

  def everyone
    @posts = Post.where('grobal LIKE ?', '1').order('created_at DESC')
  end

  def show
    @post = Post.find(params[:id])
    @post_next = Post.where("id > #{@post.id}").first
    @post_previous = Post.where("id < #{@post.id}").reverse.first
  end

  def show_favorite
    @post = Post.find(params[:id])
    @post_next = Post.where("user_id = #{current_user.id.to_s}").where("id > #{@post.id.to_s}").where("hert = 1").first
    @post_previous = Post.where("user_id = #{current_user.id.to_s}").where("id < #{@post.id.to_s}").where("hert = 1").reverse.first
  end

  def show_everyone
    @post = Post.find(params[:id])
    @post_next = Post.where("id > #{@post.id}").where("grobal = 1").first
    @post_previous = Post.where("id < #{@post.id}").where("grobal = 1").reverse.first
  end

  def new
    @post = Post.new
  end

  def create
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
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to post_path(@post)
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
    post = Post.find(params[:id])
    if post.grobal
      post.update(grobal: false)
    else
      post.update(grobal: true)
    end

    item = Post.find(params[:id])
    render json: { post: item }
  end

  def search
    @keyword = params[:keyword]
    @posts = Post.search(params[:keyword])
  end

  def search_my
    @keyword = params[:keyword]
    post = Post.search_my(params[:keyword])
    @posts = post.where('user_id LIKE ?', current_user.id.to_s)
  end

  private

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end

  def post_params
    params.require(:post).permit(:memo, :image, :hert, :grobal).merge(user_id: current_user.id)
  end

end
