Rails.application.routes.draw do

  root 'welcome#index'

  devise_for :users

  resources :users, only: [:index, :show, :edit, :update, :destroy]

  resources :lessons


  namespace :api do
    namespace :v1 do
      resources :students
      resources :teachers
      resources :lessons
    end
  end

end
