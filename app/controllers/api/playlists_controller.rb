class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.where(user_id: params[:user])
  end

  def create

  end

  def show
  end

  def update
  end
end
