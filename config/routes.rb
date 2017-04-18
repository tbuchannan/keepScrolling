Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {formats: :json} do
    resources :users
    resources :session, only: [:create, :destroy]
  end
end
