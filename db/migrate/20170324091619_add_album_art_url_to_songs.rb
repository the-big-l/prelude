class AddAlbumArtUrlToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :album_art_url, :string
  end
end
