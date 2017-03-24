import { connect } from 'react-redux';
import BrowseIndex from './browse_index';

const mapStateToProps = ({followedPlaylists, session}, ownProps) => {
  const indexItems = followedPlaylists.map(playlist => {
    const {id, name} = playlist;
    return {
      id,
      name: name,
      path: `/playlists/${id}`
    };
  });

  return {
    indexItems,
    title: 'playlists',
    currentUserId: session.currentUser && session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => ({
  requestListItems: (userId) => dispatch(requestFollowedPlaylists(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseIndex);
