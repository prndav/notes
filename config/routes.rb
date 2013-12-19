RailsNotes::Application.routes.draw do
  root 'application#index'

  resources :notes
end
