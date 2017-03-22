import { connect } from 'react-redux';
import ContextDropdown from '../context_dropdown/context_dropdown';
import { removeSong } from '../../../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => ({
  deleteId: ownProps.listItem.member_id,
  closeDropdown: ownProps.closeContextDropdown,
  sShown: ownProps.playlistIsShown,
  isOpen: ownProps.isOpen,
  isShown: ownProps.dropdownIsShown,
  parentEl: ownProps.parentEl,
  listItem: ownProps.listItem,
  type: ownProps.type,
  isSong: true
});

const mapDispatchToProps = dispatch => ({
  deleteFunction: memberId => dispatch(removeSong(memberId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContextDropdown);
