RailsNotes::Application.routes.draw do
  root 'application#index'

  resources :categories do
    resources :notes
  end
end
