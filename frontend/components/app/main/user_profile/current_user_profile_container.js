import { connect } from 'react-redux';
import UserProfile from './user_profile';
import {requestUser} from '../../../../actions/user_actions';

const mapStateToProps = ({session: {currentUser}}) => ({
  lbInfo: {
    type: 'User',
    footer: `${currentUser.playlist_count} playlists`,
    title: `${currentUser.first_name} ${currentUser.last_name}`,
    subTitle: `Joined: ${currentUser.created_at.substring(0, 7)}`
  },
  type: 'profile',
  currentUserId: currentUser.id
});

const mapDispatchToProps = dispatch => ({
  requestCollection: userId => dispatch(requestUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
