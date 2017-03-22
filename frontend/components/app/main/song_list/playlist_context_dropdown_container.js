import { connect } from 'react-redux';
import ContextDropdown from '../context_dropdown/context_dropdown';
import { removePlaylist } from '../../../../actions/playlist_actions';
import { hashHistory } from 'react-router';

const mapStateToProps = ({currentPlaylist}, ownProps) => ({
  deleteId: currentPlaylist.id,
  closeDropdown: ownProps.closeDropdown,
  isOpen: ownProps.isOpen,
  parentEl: ownProps.parentEl,
  type: 'playlist',
  currentPlaylist
});

const mapDispatchToProps = dispatch => ({
  deleteFunction: playlistId => dispatch(removePlaylist(playlistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContextDropdown);
