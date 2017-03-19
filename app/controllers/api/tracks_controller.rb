class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
      .includes(:artist, :album)
      .order('artists.name', 'albums.title', :track_no)
  end
end
