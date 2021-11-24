Rails.application.routes.draw do
  resources :teachers do
    resources :students
  end
  resources :students
  resources :users
  get "/me", to:"users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  delete "/logout", to:"sessions#destroy"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
