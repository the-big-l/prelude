class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.includes(:songs).where(user_id: params[:user])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user = current_user

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def show
    @playlist = Playlist.includes(
      :user,
      :followers,
      songs: [:artist, :album]
    ).find(params[:id])
  end

  def update
    @playlist = Playlist.includes(:user, songs: [:artist, :album]).find(params[:id])

    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    if @playlist.destroy
      render json: @playlist, status: 200
    else
      render json: @playlist.errors.full_messages, status: 404
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name, :description)
  end
end
