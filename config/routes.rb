Rails.application.routes.draw do
  get 'post/index'
  devise_for :users
  root to: 'posts#index'
  resources :posts do
    member do
      get 'hert'
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
    member do
      get 'favorite'
    end
  end
end
