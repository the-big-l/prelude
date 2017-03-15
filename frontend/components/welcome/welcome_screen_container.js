import { connect } from 'react-redux';
import WelcomeScreen from './welcome_screen';

const mapDispatchToProps = (dispatch, {location}) => ({
  currentScreen: location.pathname.slice(1)
});

export default connect(
  mapDispatchToProps
)(WelcomeScreen);
