Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  
  resources :users do
    member do
      get :posts, :comments
    end
  end



  resources :posts do 
    resources :comments
    resources :users
    get :comments, :users
  end

  

  

  get '/users/:id/posts', to: 'users#posts'
  # get '/posts/:id/comments', to: 'posts#add_comment'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
