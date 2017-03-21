import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { createPlaylist } from '../../../actions/playlist_actions';

const mapStateToProps = (state, {closeFormModal, isFormShown, isOpen}) => ({
  closeFormModal,
  isFormShown,
  isOpen,
  errors: state.currentPlaylist.errors
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm);
