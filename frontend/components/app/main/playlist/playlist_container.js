import { connect } from 'react-redux';
import SongList from '../song_list/song_list';
import { requestPlaylist } from '../../../../actions/playlist_actions';

const mapStateToProps = ({currentPlaylist}, ownProps) => ({
  songList: currentPlaylist.songs,
  description: currentPlaylist.description,
  title: currentPlaylist.name,
  type: 'playlist'
});

const mapDispatchToProps = dispatch => ({
  requestSongs: (playlistId) => dispatch(requestPlaylist(playlistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
