const parseAlbumsResponse = (albums) => (
  albums.map(a => (
      {
    		id: a.id,
    		name: a.name,
    		artists: a.artists.map(a => a.name).join(', '),
    		tracks: a.tracks.items.map(t => (
    				{
    					id: t.id,
    					track: t.name,
    					track_number: t.track_number,
    					duration_ms: t.duration_ms
    				}
    			)
        );
      }
    )
  );
);
