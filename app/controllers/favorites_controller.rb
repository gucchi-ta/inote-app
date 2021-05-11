class FavoritesController < ApplicationController
  # createは非同期で実装できていないのでリダイレクトで仮実装
  def create
    # paramsにidを追加したかったけどjs.erbには渡せてないのか？
    # params[:id] = params[:post_id]
    @post = Post.find(params[:post_id])
    favorite = current_user.favorites.build(post_id: params[:post_id])
    # いいねの重複チェック・重複していない場合のみ保存
    unless current_user.favorites.exists?(post_id: params[:post_id])
      favorite.save
    end

    # 遷移元に合わせてリダイレクト
    if request.referer&.include?('show_favorite')
      redirect_to show_favorite_post_path(params[:post_id])
      # break
    elsif request.referer&.include?('show_everyone')
      redirect_to show_everyone_post_path(params[:post_id])
      # break
    else
      redirect_to post_path(params[:post_id])
      # break
    end
  end

  # destroyは非同期で実装できたので非同期実装
  def destroy
    params.merge(id: params[:post_id])
    @post = Post.find(params[:post_id])
    favorite = Favorite.find_by(post_id: params[:post_id], user_id: current_user.id)
    favorite.destroy
  end

  private

  def favorite_params
    params.merge(id: params[:post_id])
  end
end
