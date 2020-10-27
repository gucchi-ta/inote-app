Rails.application.routes.draw do
  get 'post/index'
  devise_for :users
  root to: 'posts#index'
  resources :posts, except: [:show] do
    member do
      get 'hert'
      get 'grobal'
    end
  end
end
