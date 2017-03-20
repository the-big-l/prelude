import { connect } from 'react-redux';
import PlaylistDropdown from './playlist_dropdown';
import { addToPlaylist, requestUserPlaylists } from '../../../../actions/playlist_actions';

const mapStateToProps = ({userPlaylists, session}, ownProps) => ({
  userPlaylists,
  currentUser: session.currentUser,
  toggleDropdown: ownProps.toggleDropdown,
  songId: ownProps.songId
});

const mapDispatchToProps = dispatch => ({
  requestUserPlaylists: user => dispatch(requestUserPlaylists(user)),
  addToPlaylist: playlistMember => dispatch(addToPlaylist(playlistMember))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDropdown);
