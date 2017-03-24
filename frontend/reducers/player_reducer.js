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

const _defaultPlayer = Object.freeze({
  playing: false,
  loop: false,
  mute: false,
  volume: 1.0,
  currentSong: 0,
  queue: [{song: {title: '', album: ''}}]
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
      return merge({}, state, {queue, playing: true});
    default:
      return state;
  }
};

export default playerReducer;
