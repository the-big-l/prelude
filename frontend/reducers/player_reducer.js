import merge from 'lodash/merge';
import {
  TOGGLE_PLAY,
  TOGGLE_LOOP,
  TOGGLE_MUTE,
  PREVIOUS_SONG,
  NEXT_SONG,
  SHUFFLE_SONGS,
  CHANGE_VOLUME,
  REPLACE_QUEUE } from '../actions/player_actions.js';

const sampleQueue = [
  {
    src: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-1%20-%20You%20Are%20Young.mp3",
    title: 'Long Song Name(You Are Young)',
    album_image: 'Strangeland',
    artist: 'Really, Really long artist name (Keane)'
  },
  {
    src: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-10%20-%20Day%20Will%20Come.mp3",
    title: 'Day Will Come',
    album_image: 'Strangeland',
    artist: 'Keane'
  },
    {
    src: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane-Perfect_Symmetry-2008-V0%2F02-Keane-The_Lovers_Are_Losing.mp3",
    title: 'The Lovers Are Losing',
    album_image: 'Perfect Symmetry',
    artist: 'Keane'
  }

]

const _defaultPlayer = Object.freeze({
  playing: false,
  loop: false,
  mute: false,
  volume: 1.0,
  currentSong: 0,
  queue: sampleQueue
});

const _shuffleSongs = q => {
    for (let i = q.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [q[i - 1], q[j]] = [q[j], q[i - 1]];
    }

    return q;
}

const playerReducer = (state = _defaultPlayer, action) => {
  Object.freeze(state)
  let currentSong;
  let queue;
  switch(action.type) {
    case TOGGLE_PLAY:
      const playing = !state.playing;
      return merge({}, state, {playing});
    case TOGGLE_LOOP:
      const loop = !state.loop;
      return merge({}, state, {loop});
    case TOGGLE_MUTE:
      const mute = !state.mute;
      return merge({}, state, {mute});
    case PREVIOUS_SONG:
      let temp = state.currentSong - 1;
      currentSong = temp < 0 ? 0 : temp;
      return merge({}, state, {currentSong});
    case NEXT_SONG:
      currentSong = (state.currentSong + 1) % state.queue.length;
      return merge({}, state, {currentSong});
    case SHUFFLE_SONGS:
      queue = _shuffleSongs(state.queue.slice());
      return merge({}, state, {queue, currentSong: 0});
    case CHANGE_VOLUME:
      const volume = action.volume;
      return merge({}, state, {volume});
    case REPLACE_QUEUE:
      queue = action.newQueue;
      return merge({}, state, {queue});
    default:
      return state;
  }
};

export default playerReducer;
