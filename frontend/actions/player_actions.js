export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const TOGGLE_LOOP = "TOGGLE_LOOP";
export const TOGGLE_MUTE = "TOGGLE_MUTE";
export const PREVIOUS_SONG = "PREVIOUS_SONG";
export const NEXT_SONG = "NEXT_SONG";
export const SHUFFLE_SONGS = "SHUFFLE_SONGS";
export const CHANGE_VOLUME = "CHANGE_VOLUME";
export const REPLACE_QUEUE = "REPLACE_QUEUE";


export const togglePlay = () => ({
  type: TOGGLE_PLAY
});

export const toggleLoop = () => ({
  type: TOGGLE_LOOP
});

export const toggleMute = () => ({
  type: TOGGLE_MUTE
});

export const previousSong = () => ({
  type: PREVIOUS_SONG
});

export const nextSong = () => ({
  type: NEXT_SONG
});

export const shuffleSongs = () => ({
  type: SHUFFLE_SONGS
});

export const changeVolume = (volume) => ({
  type: CHANGE_VOLUME,
  volume
});

export const replaceQueue = (newQueue) => ({
  type: REPLACE_QUEUE,
  newQueue
});
