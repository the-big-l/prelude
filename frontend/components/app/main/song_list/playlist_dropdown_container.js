import { connect } from 'react-redux';
import PlaylistDropdown from './playlist_dropdown';
import { requestUserPlaylists } from '../../../../actions/playlist_actions';

const mapStateToProps = ({userPlaylists}) => ({
  userPlaylists
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDropdown);
