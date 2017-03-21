class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.where(user_id: params[:user])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user = current_user

    if @playlist.save
      render json: ['successfully saved'], status: 200
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def show
  end

  def update
  end

  def playlist_params
    params.require(:playlist).permit(:name, :description)
  end
end
