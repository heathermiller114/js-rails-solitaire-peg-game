Rails.application.routes.draw do
  devise_for :users
  
  devise_scope  :user do
    scope :auth, defaults: { format: :json } do    
      get "sign_in", to: "devise/sessions#new"
      get "sign_up", to: "devise/registrations#new"
    end
  end
end
