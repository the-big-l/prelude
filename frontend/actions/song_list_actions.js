import fetchSongs from '../util/song_util';
export const POPULATE_SONG_LIST = "POPULATE_SONG_LIST";

// sync
export const populateSongList = songList => ({
  type: POPULATE_SONG_LIST,
  songList
});

// async
export const requestSongs = () => dispatch => (
  fetchSongs()
    .then(songList => dispatch(populateSongList(songList)))
);
