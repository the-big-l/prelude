import { connect } from 'react-redux';
import UserProfile from './user_profile';
import {requestUser} from '../../../../actions/user_actions';

const mapStateToProps = ({users: {currentUser}}) => {
  return({
  lbInfo: {
    type: 'User',
    title: `${currentUser.first_name} ${currentUser.last_name}`,
    subTitle: `Joined: ${currentUser.created_at.substring(0, 7)}`,
    footer: `${currentUser.playlist_count} playlists`
  }
})};

const mapDispatchToProps = dispatch => ({
  requestCollection: userId => dispatch(requestUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
