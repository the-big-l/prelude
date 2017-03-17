import merge from 'lodash/merge';
import {
  TOGGLE_PLAY,
  TOGGLE_LOOP,
  TOGGLE_MUTE,
  PREVIOUS_SONG,
  NEXT_SONG,
  CHANGE_VOLUME,
  REPLACE_QUEUE } from '../actions/player_actions.js';

const sampleQueue = [
  "https://s3-us-west-1.amazonaws.com/prelude-prd/halo-cea-gregorian-chant-1.mp3",
  "http://www.bensound.com/bensound-music/bensound-cute.mp3",
  "http://www.bensound.com/bensound-music/bensound-energy.mp3"
]

const _defaultPlayer = Object.freeze({
  playing: false,
  loop: false,
  mute: false,
  volume: 1.0,
  currentSong: 0,
  queue: sampleQueue
});

const playerReducer = (state = _defaultPlayer, action) => {
  Object.freeze(state)
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
      const prevPos = temp < 0 ? 0 : temp;
      return merge({}, state, {currentSong: prevPos});
    case NEXT_SONG:
      const nextPos = (state.currentSong + 1) % state.queue.length;
      return merge({}, state, {currentSong: nextPos});
    case CHANGE_VOLUME:
      const volume = action.volume;
      return merge({}, state, {volume});
    case REPLACE_QUEUE:
      const queue = action.newQueue;
      return merge({}, state, {queue});
    default:
      return state;
  }
};

export default playerReducer;
