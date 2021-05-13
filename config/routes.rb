Rails.application.routes.draw do
  get 'favorites/create'
  get 'post/index'
  devise_for :users
  root to: 'posts#index'
  resources :posts do
    resource :favorites, only: [:create, :destroy]  # resourceは単数形
    member do
      get 'grobal'
      get 'show_favorite'
      get 'show_everyone'
    end
    collection do
      get 'everyone'
      get 'search'
      get 'search_my'
      get 'favorite'
    end
  end
  resources :users, only: [:show] do
  end
end
