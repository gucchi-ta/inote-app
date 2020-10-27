Rails.application.routes.draw do
  get 'post/index'
  devise_for :users
  root to: 'posts#index'
  resources :posts, except: [:show]
  get 'posts/:id', to: 'posts#hert'
end
