Rails.application.routes.draw do
  root'welcome#index'

  resources :teachers do
    resources :students
  end

  resources :teachers do
    resources :instruments
  end

  resources :instruments

  resources :students do
    resources :instruments
  end

  devise_for :users

end
