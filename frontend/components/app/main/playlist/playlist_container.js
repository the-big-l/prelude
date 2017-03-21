import { connect } from 'react-redux';
import SongList from '../song_list/song_list';
import { requestPlaylist } from '../../../../actions/playlist_actions';
import {replaceQueue} from '../../../../actions/player_actions';

const mapStateToProps = ({currentPlaylist}, ownProps) => ({
  songList: currentPlaylist.songs,
  description: currentPlaylist.description,
  title: currentPlaylist.name,
  type: 'playlist',
  author: currentPlaylist.author
});

const mapDispatchToProps = dispatch => ({
  requestSongs: playlistId => dispatch(requestPlaylist(playlistId)),
  replaceQueue: newQueue => dispatch(replaceQueue(newQueue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);