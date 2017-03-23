import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { createPlaylist } from '../../../actions/current_playlist_actions';

const mapStateToProps = ({currentPlaylist}, {closeFormModal, isFormShown, isOpen}) => ({
  closeFormModal,
  isFormShown,
  isOpen,
  titleText: 'Create Playlist',
  submitText: 'Create',
  initialState: {name: '', description: '', id: null},
  errors: currentPlaylist.errors
});

const mapDispatchToProps = dispatch => ({
  submitFunction: playlist => dispatch(createPlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm);
