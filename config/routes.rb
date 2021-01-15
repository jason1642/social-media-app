Rails.application.routes.draw do
  resources :posts
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  
  resources :users 
  resources :posts do 
    resources :comments
  end


  


  get '/posts/:id/comments', to: 'posts#add_comment'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
