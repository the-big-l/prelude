import { connect } from 'react-redux';
import Player from './player';
import {
  togglePlay,
  toggleLoop,
  toggleMute,
  previousSong,
  nextSong,
  changeVolume,
  replaceQueue } from '../../../actions/player_actions';

const mapStateToProps = ({ player }) => ({
  playing: player.playing,
  loop: player.loop,
  mute: player.mute,
  volume: player.volume,
  source: player.queue[player.currentSong],
});

const mapDispatchToProps = dispatch => ({
  togglePlay: () => dispatch(togglePlay()),
  toggleLoop: () => dispatch(toggleLoop()),
  toggleMute: () => dispatch(toggleMute()),
  previousSong: () => dispatch(previousSong()),
  nextSong: () => dispatch(nextSong()),
  changeVolume: volume => dispatch(changeVolume(volume))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
