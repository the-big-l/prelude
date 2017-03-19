import { connect } from 'react-redux';
import SongList from './song_list';

const mapStateToProps = ({songList}) => ({
  songList
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
