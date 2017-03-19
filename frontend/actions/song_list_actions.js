export const POPULATE_SONG_LIST = "POPULATE_SONG_LIST";

export const populateSongList = songList => ({
  type: POPULATE_SONG_LIST,
  songList
});
