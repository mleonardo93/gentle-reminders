Rails.application.routes.draw do
  get 'items/create'
  get 'users/show'
  get 'home/index'
  get 'home/about'
  devise_for :users
  resources :users, only: [:show] do
    resources :items, only: [:create]
  end
  root to: "users#current_user_home"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
