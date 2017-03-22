import fetchSongs from '../util/song_util';
export const POPULATE_SONG_LIST = "POPULATE_SONG_LIST";

// sync
export const populateSongList = listItems => ({
  type: POPULATE_SONG_LIST,
  listItems
});

// async
export const requestSongs = () => dispatch => (
  fetchSongs()
    .then(songs => {
      const listItems = songs.map(song => ({song}));
      return dispatch(populateSongList(listItems));
    })
);
