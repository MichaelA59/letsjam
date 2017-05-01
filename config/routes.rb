Rails.application.routes.draw do

  root 'welcome#index'

  devise_for :users

  resources :users, only: [:index, :show, :edit, :update, :destroy]

end
