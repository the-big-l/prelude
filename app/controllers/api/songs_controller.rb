class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
      .includes(:artist, :album)
      .order('artists.name', 'albums.title', :track_no)
  end
end
