import AppHeader from './login_form';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
