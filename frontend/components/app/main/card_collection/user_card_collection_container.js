import { connect } from 'react-redux';
import CardCollection from './card_collection';

const mapStateToProps = ({users}, ownProps) => {
  const collectionItems = users.users.map(user => {
    const {id, first_name, last_name, username, avatar_url, created_at, playlist_count} = user;
    return {
      id,
      imageUrl: avatar_url,
      title: `${first_name} ${last_name}`,
      mediaInfo: `Joined: ${created_at.substring(0, 7)}`,
      footer: `${playlist_count} playlists`,
      showPath: `/users/${id}`
    };
  });

  return {
    collectionItems,
    users
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardCollection);
