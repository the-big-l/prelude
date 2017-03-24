import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { updatePlaylist } from '../../../actions/current_playlist_actions';

const mapStateToProps = ({currentPlaylist}, {closeFormModal, isFormShown, isOpen}) => ({
  closeFormModal,
  isFormShown,
  isOpen,
  titleText: 'Update Playlist',
  submitText: 'Update',
  initialState: {
    name: currentPlaylist.name,
    description: currentPlaylist.description,
    id: currentPlaylist.id
  },
  errors: currentPlaylist.errors
});

const mapDispatchToProps = dispatch => ({
  submitFunction: playlist => dispatch(updatePlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm);
