import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  togglePlay: null,
  toggleLoop: null,
  toggleMute: null,
  previousSong: null,
  nextSong: null,
  shuffleSongs: null,
  changeVolume: ['volume'],
  replaceQueue: ['newQueue']
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable({
  playing: false,
  loop: false,
  mute: false,
  volume: 1.0,
  currentSong: 0,
  queue: [{ song: { title: '', album: '' } }]
});

/* ------------- Helpers ------------- */

const _shuffleSongs = q => {
  for (let i = q.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [q[i - 1], q[j]] = [q[j], q[i - 1]];
  }

  return q;
}

/* ------------- Reducers ------------- */

const togglePlay = (state) => state.merge({ playing: !state.playing })
const toggleLoop = (state) => state.merge({ loop: !state.loop })
const toggleMute = (state) => state.merge({ mute: !state.mute })

const previousSong = (state) => {
  const currentSong = Math.max(0, state.currentSong - 1)
  return state.merge({ currentSong })
}

const nextSong = (state) => {
  const currentSong = (state.currentSong + 1) % state.queue.length
  return state.merge({ currentSong })
}

const shuffleSongs = (state) => {
  const queue = _shuffleSongs([...state.queue])
  return state.merge({ queue, currentSong: 0 })
}

const changeVolume = (state, { volume }) => state.merge({ volume })

const replaceQueue = (state, { newQueue }) =>
  state.merge({ queue: newQueue, playing: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_PLAY]: togglePlay,
  [Types.TOGGLE_LOOP]: toggleLoop,
  [Types.TOGGLE_MUTE]: toggleMute,
  [Types.PREVIOUS_SONG]: previousSong,
  [Types.NEXT_SONG]: nextSong,
  [Types.SHUFFLE_SONGS]: shuffleSongs,
  [Types.CHANGE_VOLUME]: changeVolume,
  [Types.REPLACE_QUEUE]: replaceQueue
})
