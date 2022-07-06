Rails.application.routes.draw do
  namespace :api do
    resources :products, only: [:index, :show]

    resource :user, only: [:create]
  end
end
