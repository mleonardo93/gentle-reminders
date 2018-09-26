Rails.application.routes.draw do
  devise_for :users

  namespace :api, defaults: {  format: :json } do
    resources :users, only: [:index] do
      resources :items
    end
  end

  get "*path" => 'home#index'

  root 'home#index'
end
