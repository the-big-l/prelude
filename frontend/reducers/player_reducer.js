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
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-1%20-%20You%20Are%20Young.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-10%20-%20Day%20Will%20Come.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-11%20-%20In%20Your%20Own%20Time.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-12%20-%20Sea%20Fog.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-2%20-%20Silenced%20by%20the%20Night.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-3%20-%20Disconnected.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-4%20-%20Watch%20How%20You%20Go.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-5%20-%20Sovereign%20Light%20Cafe.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-6%20-%20On%20the%20Road.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-7%20-%20The%20Starting%20Line.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-8%20-%20Black%20Rain.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-9%20-%20Neon%20River.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F01-Keane-Spiralling.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F02-Keane-The_Lovers_Are_Losing.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F03-Keane-Better_Than_This.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F04-Keane-You_Havent_Told_Me_Anything.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F05-Keane-Perfect_Symmetry.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F06-Keane-You_Dont_See_Me.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F07-Keane-Again_And_Again.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F08-Keane-Playing_Along.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F09-Keane-Pretend_That_Youre_Alone.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F10-Keane-Black_Burning_Heart.mp3",
  "https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F11-Keane-Love_Is_The_End.mp3"
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
