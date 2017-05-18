Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :follows, only: [:create, :destroy, :index]
      get "potential_followers", on: :member
      get "followed_posts", on: :member
    end
    resources :posts
    resource :session, only: [:create, :destroy]
  end
end
