import { connect } from 'react-redux';
import CardCollection from './card_collection';

const mapStateToProps = ({userPlaylists}, ownProps) => {
  const collectionItems = userPlaylists.map(list => {
    const {id, name, description, created_at, song_count} = list;
    return {
      id,
      title: name,
      subtitle: description,
      mediaInfo: `Created: ${created_at.substring(0, 7)}`,
      footer: `${song_count} songs`,
      showPath: `/playlists/${id}`
    };
  });

  return {
    collectionItems
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardCollection);
