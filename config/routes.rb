Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :playlist_follows, only: [:create, :destroy]
    resources :playlist_members, only: [:create, :destroy]
    resources :playlist_follows, only: [:create, :destroy]
    resources :playlists, only: [:create, :index, :show, :update, :destroy]
    resources :songs, only: [:index]
    resources :albums, only: [:index, :show]
    resources :artist, only: [:index, :show]
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
