import { connect } from 'react-redux';
import SignupFlow from './signup_flow';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.currentUser
});

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
   };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupFlow);
