import { connect } from 'react-redux';
import MainNav from './main_nav';
import { requestUserPlaylists } from '../../../actions/playlist_actions';

const mapStateToProps = ({userPlaylists, session}, ownProps) => ({
  userPlaylists,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestUserPlaylists: user => dispatch(requestUserPlaylists(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNav);
