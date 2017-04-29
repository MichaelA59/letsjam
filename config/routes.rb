Rails.application.routes.draw do
  root'welcome#index'

  devise_for :users

  resources :users, only: [:show, :edit, :update]
  resources :students, except: [:destroy, :edit, :update]
  resources :teachers, except: [:create, :update, :destroy]

  resources :teachers do
    resources :students, except: [:edit, :update, :destroy]
  end

  resources :teachers
end
