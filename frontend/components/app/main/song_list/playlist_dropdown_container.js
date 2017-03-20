import { connect } from 'react-redux';
import PlaylistDropdown from './playlist_dropdown';
import { addToPlaylist, requestUserPlaylists } from '../../../../actions/playlist_actions';

const mapStateToProps = ({userPlaylists, session}, ownProps) => ({
  userPlaylists,
  currentUser: session.currentUser,
  songId: ownProps.songId,
  closePlaylistModal: ownProps.closePlaylistModal,
  playlistIsShown: ownProps.playlistIsShown,
  isOpen: ownProps.isOpen
});

const mapDispatchToProps = dispatch => ({
  requestUserPlaylists: user => dispatch(requestUserPlaylists(user)),
  addToPlaylist: playlistMember => dispatch(addToPlaylist(playlistMember))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDropdown);
