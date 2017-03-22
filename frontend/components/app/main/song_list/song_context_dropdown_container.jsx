import { connect } from 'react-redux';
import ContextDropdown from '../context_dropdown/context_dropdown';
import { removeSong } from '../../../../actions/playlist_actions';

const mapStateToProps = ({currentPlaylist}, ownProps) => ({
  currentPlaylist,
  deleteId: ownProps.id,
  closeContextDropdown: ownProps.closeContextDropdown,
  playlistIsShown: ownProps.playlistIsShown,
  isOpen: ownProps.isOpen,
  isShown: ownProps.dropdownIsShown,
  parentEl: ownProps.parentEl,
  listItem: ownProps.listItem
});

const mapDispatchToProps = dispatch => ({
  handleDelete: memberId => dispatch(removeSong(memberId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContextDropdown);
