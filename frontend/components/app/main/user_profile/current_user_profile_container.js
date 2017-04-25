import { connect } from 'react-redux';
import UserProfile from './user_profile';
import {requestUser} from '../../../../actions/user_actions';

const mapStateToProps = ({session: {currentUser}}) => ({
  lbInfo: {
    imageUrl: currentUser.avatar_url,
    type: 'User',
    footer: `${currentUser && currentUser.playlist_count} playlists`,
    title: `${currentUser && currentUser.first_name} ${currentUser && currentUser.last_name}`,
    subTitle: `Joined: ${currentUser && currentUser.created_at.substring(0, 7)}`
  },
  type: 'profile',
  currentUserId: currentUser && currentUser.id
});

const mapDispatchToProps = dispatch => ({
  requestCollection: userId => dispatch(requestUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
