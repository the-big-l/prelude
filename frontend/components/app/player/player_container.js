import { connect } from 'react-redux';
import Player from './player';
import {
  togglePlay,
  toggleLoop,
  toggleMute,
  previousSong,
  nextSong,
  shuffleSongs,
  changeVolume,
  replaceQueue } from '../../../actions/player_actions';

const mapStateToProps = ({ player }) => ({
  playing: player.playing,
  loop: player.loop,
  mute: player.mute,
  volume: player.volume,
  song: player.queue[player.currentSong].song,
});

const mapDispatchToProps = dispatch => ({
  togglePlay: () => dispatch(togglePlay()),
  toggleLoop: () => dispatch(toggleLoop()),
  toggleMute: () => dispatch(toggleMute()),
  previousSong: () => dispatch(previousSong()),
  nextSong: () => dispatch(nextSong()),
  shuffleSongs: () => dispatch(shuffleSongs()),
  changeVolume: volume => dispatch(changeVolume(volume))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
