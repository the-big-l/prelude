import { connect } from 'react-redux';
import Player from './player';
import PlayerActions from '../../../Redux/PlayerRedux';

const mapStateToProps = ({ player }) => ({
  playing: player.playing,
  loop: player.loop,
  mute: player.mute,
  volume: player.volume,
  song: player.queue[player.currentSong].song,
});

const mapDispatchToProps = dispatch => ({
  togglePlay: () => dispatch(PlayerActions.togglePlay()),
  toggleLoop: () => dispatch(PlayerActions.toggleLoop()),
  toggleMute: () => dispatch(PlayerActions.toggleMute()),
  previousSong: () => dispatch(PlayerActions.previousSong()),
  nextSong: () => dispatch(PlayerActions.nextSong()),
  shuffleSongs: () => dispatch(PlayerActions.shuffleSongs()),
  changeVolume: volume => dispatch(PlayerActions.changeVolume(volume))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
