class Api::PlaylistFollowsController < ApplicationController
  def index
    @playlist_follows = PlaylistFollow
                        .includes(:playlist)
                        .where(user_id: params[:user])
  end

  def create
    @playlist_follow = PlaylistFollow.new(follow_params)
    @playlist_follow.user = current_user

    if @playlist_follow.save
      render json: @playlist_follow
    else
      render json: @playlist_follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_follow = PlaylistFollow.find(params[:id])
    if @playlist_follow.destroy
      render json: @playlist_follow, status: 200
    else
      render json: @playlist_follow.errors.full_messages, status: 404
    end
  end

  private

  def follow_params
    params.require(:playlist_follow).permit(:playlist_id)
  end
end
