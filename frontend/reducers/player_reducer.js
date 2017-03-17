import merge from 'lodash/merge';
import {
  TOGGLE_PLAY,
  TOGGLE_LOOP,
  TOGGLE_MUTE,
  PREVIOUS_SONG,
  NEXT_SONG,
  CHANGE_VOLUME,
  REPLACE_QUEUE } from '../actions/player_actions.js';

const _defaultPlayer = Object.freeze({
  playing: false,
  loop: false,
  mute: false,
  volume: 1.0,
  currentSongIdx: 0;
  queue: []
});

const playerReducer = (state = _defaultPlayer, action) => {
  Object.freeze(state)
  switch(action.type) {
    case TOGGLE_PLAY:
      const playing = !state.playing;
      return merge({}, state, {playing});
    case TOGGLE_REPEAT:
      const loop = !state.loop;
      return merge({}, state, {loop});
    case TOGGLE_MUTE:
      const mute = !state.mute;
      return merge({}, state, {mute});
    case PREVIOUS_SONG:
      let temp = state.currentSongIdx - 1;
      currentSongIdx = temp < 0 ? 0 : temp;
      return merge({}, state, {currentSongIdx});
    case PREVIOUS_SONG:
      const currentSongIdx = (state.currentSongIdx + 1) % state.queue.length;
      return merge({}, state, {currentSongIdx});
    case CHANGE_VOLUME:
      const volume = action.volume;
      return merge({}, state, {volume});
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
