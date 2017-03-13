var parseAlbumResponse = (albums) => {
  return albums.albums.map(album => {

    const tracks = album.tracks.items.map(t => {
      return {
        id: t.id,
        artist: t.artists.map(artist => artist.name).join(', '),
        album: album.name,
        track: t.name,
        track_number: t.track_number,
        duration_ms: t.duration_ms
      };
    });

    return {
      id: album.id,
      name: album.name,
      artists: album.artists.map(artist => artist.name).join(', '),
      tracks
    };
  });
};
