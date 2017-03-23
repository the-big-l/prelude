import { connect } from 'react-redux';
import SongList from './song_list';
import { requestSongs } from '../../../../actions/song_list_actions';
import {replaceQueue} from '../../../../actions/player_actions';

const mapStateToProps = ({listItems, currentPlaylist}) => ({
  listItems,
  description: 'All the songs',
  title: 'SONGS',
  type: 'browse',
  currentPlaylist,
  footer: `Created by: Prelude · ${listItems.length} songs`
});

const mapDispatchToProps = dispatch => ({
  requestSongs: () => dispatch(requestSongs()),
  replaceQueue: (newQueue) => dispatch(replaceQueue(newQueue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
