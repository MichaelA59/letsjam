Rails.application.routes.draw do

  root 'welcome#index'

  devise_for :users

  resources :users, only: [:index, :show, :edit, :update, :destroy]

  resources :lessons


  namespace :api do
    namespace :v1 do
      resources :users
      resources :lessons
      resources :tutorships
    end
  end

end
