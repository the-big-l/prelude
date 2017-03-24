class Api::PlaylistFollowsController < ApplicationController
  def index
    @playlist_follows = PlaylistFollow
                        .includes(:playlist)
                        .where(user_id: params[:user])
  end

  def create
    playlist_follow = PlaylistFollow.new(follow_params)
    playlist_follow.user = current_user

    if playlist_follow.save
      @playlist = playlist_follow.playlist
      render :show
    else
      render json: playlist_follow.errors.full_messages, status: 422
    end
  end

  def destroy
    playlist_follow = PlaylistFollow
                      .where(
                        playlist_id: params[:playlist],
                        user: current_user
                      ).first

    if playlist_follow
      @playlist = playlist_follow.playlist
      playlist_follow.destroy
      render :show
    else
      render json: ['must currently be following'], status: 404
    end
  end

  private

  def follow_params
    params.require(:playlist_follow).permit(:playlist_id)
  end
end
