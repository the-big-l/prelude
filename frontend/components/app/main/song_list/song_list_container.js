import { connect } from 'react-redux';
import SongList from './song_list';
import { requestSongs } from '../../../../actions/song_list_actions';

const mapStateToProps = ({songList}) => ({
  songList
});

const mapDispatchToProps = dispatch => ({
  requestSongs: () => dispatch(requestSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
