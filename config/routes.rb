Rails.application.routes.draw do

  namespace :api, defaults: {  format: :json } do
    resources :users, only: [:index] do
      resources :items, only: [:create, :destroy]
    end
  end
  devise_for :users

  get "*path" => redirect("/?goto=%{path}")
end
