import { connect } from 'react-redux';
import SongList from '../song_list/song_list';
import { requestPlaylist } from '../../../../actions/current_playlist_actions';
import {replaceQueue} from '../../../../actions/player_actions';
import {followPlaylist, unfollowPlaylist} from '../../../../actions/playlist_follow_actions';

const mapStateToProps = ({currentPlaylist, listItems}, ownProps) => ({
  listItems,
  description: currentPlaylist.description,
  imageUrl: currentPlaylist.image_url,
  title: currentPlaylist.name,
  type: 'playlist',
  footer: `Created by: ${currentPlaylist.author} · ${listItems.length} songs`,
  currentPlaylist
});

const mapDispatchToProps = dispatch => ({
  requestSongs: playlistId => dispatch(requestPlaylist(playlistId)),
  replaceQueue: newQueue => dispatch(replaceQueue(newQueue)),
  followHandler: playlistId => dispatch(followPlaylist(playlistId)),
  unfollowHandler: playlistId => dispatch(unfollowPlaylist(playlistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
