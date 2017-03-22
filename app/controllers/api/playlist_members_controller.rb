class Api::PlaylistMembersController < ApplicationController
  def create
    @playlist_member = PlaylistMember.new(playlist_member_params)

    if @playlist_member.save
      render json: @playlist_member, status: 200
    else
      render json: @playlist_member.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_member = PlaylistMember.find(params[:id])
    if @playlist_member.destroy
      render json: @playlist_member
    else
      render json: @playlist_member.errors.full_messages, status: 404
    end
  end

  def playlist_member_params
    params.require(:playlist_member).permit(:song_id, :playlist_id)
  end
end
