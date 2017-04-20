Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {formats: :json} do
    resources :users, only: [:create ]
    resources :posts
    resource :session, only: [:create, :destroy]
  end
end
