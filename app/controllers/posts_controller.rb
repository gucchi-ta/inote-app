class PostsController < ApplicationController
  before_action :move_to_index, except: [:index, :everyone, :search, :show_everyone]
  before_action :show_redirect, only: [:show, :show_favorite, :show_everyone]
  def index
    @posts = Post.where('user_id LIKE ?', current_user.id.to_s).order('created_at DESC') if user_signed_in?
    @everyone_posts = Post.where('grobal LIKE ?', '1').order('created_at DESC')
  end

  def favorite
    @posts = Favorite.where('user_id LIKE ?', current_user.id.to_s).order('created_at DESC') if user_signed_in?
  end

  def everyone
    @posts = Post.where('grobal LIKE ?', '1').order('created_at DESC')
  end

  def show
    @post = Post.find(params[:id])
    unless @post.user_id == current_user.id
      redirect_to root_path
      return
    end
    @post_next = Post.where("id > #{@post.id}").where("user_id = #{current_user.id.to_s}").first
    @post_previous = Post.where("id < #{@post.id}").where("user_id = #{current_user.id.to_s}").reverse.first    
  end

  def show_favorite
    @post = Post.find(params[:id])
    @favorite = @post.favorites.where("user_id = #{current_user.id.to_s}")
    unless @favorite.present?
      if Post.where('user_id LIKE ?', current_user.id.to_s).where('id LIKE ?', params[:id]).present?
        redirect_to post_path(params[:id])
        return
      elsif Post.where('id LIKE ?', params[:id]).where('grobal LIKE ?', '1').present?
        redirect_to show_everyone_post_path(params[:id])
        return
      else
        redirect_to root_path
        return
      end
    end
    @favorite_next = Favorite.where("user_id = #{current_user.id.to_s}").where("id > #{@favorite[0].id.to_s}").first
    @favorite_previous = Favorite.where("user_id = #{current_user.id.to_s}").where("id < #{@favorite[0].id.to_s}").reverse.first
  end

  def show_everyone
    @post = Post.find(params[:id])
    if @post.grobal == false
      if @post.user_id == current_user.id
        redirect_to post_path(params[:id])
      else
        redirect_to everyone_posts_path
        return
      end
    end
    @post_next = Post.where("id > #{@post.id}").where("grobal = 1").first
    @post_previous = Post.where("id < #{@post.id}").where("grobal = 1").reverse.first
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.grobal = false
    if @post.valid?
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

  def show_redirect
    unless Post.where('id LIKE ?', params[:id]).present? && user_signed_in? 
      redirect_to root_path
      return
    end
  end

  def post_params
    params.require(:post).permit(:memo, :image, :grobal).merge(user_id: current_user.id)
  end

end
