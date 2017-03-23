import { connect } from 'react-redux';
import UserIndex from './user_index';
import {requestUsers} from '../../../../actions/user_actions';

const mapStateToProps = props => ({
});

const mapDispatchToProps = dispatch => ({
  requestCollection: () => dispatch(requestUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex);
