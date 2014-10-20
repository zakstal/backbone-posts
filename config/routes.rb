Rails.application.routes.draw do
  root to: "root#root"
  #is this right?

  resources :posts

end
