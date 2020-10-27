Rails.application.routes.draw do
  get 'post/index'
  devise_for :users
  root to: 'posts#index'
  resources :posts, except: [:show] do
    member do
      get 'hert'
      get 'grobal'
    end
    collection do
      get 'everyone'
    end
  end
  resources :users, only: [:show] do
    member do
      get 'favorite'
    end
  end
end
