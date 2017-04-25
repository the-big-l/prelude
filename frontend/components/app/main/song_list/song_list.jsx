import React from 'react';
import ListBillboard from '../list_billboard/list_billboard';
import SongListIndex from './song_list_index';
import PlaylistContextDropdownContainer from '../context_dropdown/playlist_context_dropdown_container';

class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false}
    this.handlePlay = this.handlePlay.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
    this.followHandler = this.followHandler.bind(this);
  }

  componentWillMount() {
    this.props.requestSongs(this.params());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.props.requestSongs(nextProps.params.id);
    }
  }

  params() {
    if (this.props.params.id) return this.props.params.id;
  }

  handlePlay(e) {
    e.preventDefault();
    this.props.replaceQueue(this.props.listItems);
  }

  closeDropdown() {
    this.setState({isOpen: false});
  }

  openDropdown() {
    this.setState({isOpen: true});
  }

  followHandler(e) {
    e.preventDefault();

    if (this.props.currentPlaylist.following) {
      this.props.unfollowHandler(this.props.currentPlaylist.id);
    } else {
      this.props.followHandler(this.props.currentPlaylist.id);
    }
  }

  renderFollowButton() {
    if (this.props.type === 'playlist') {
      return (
        <button
          onClick={this.followHandler}>
          {this.props.currentPlaylist.following ? 'unfollow' : 'follow'}
        </button>
      );
    }
  }

  renderContextButton() {
    if (this.props.type === 'playlist') {
      return (
        <button
          id={'btn-context-playlist-billboard'}
          onClick={this.openDropdown}>
          {'...'}
        </button>
      );
    }
  }

  renderContextDropdown() {
    if (this.state.isOpen) {
      return (
        <PlaylistContextDropdownContainer
          closeDropdown={this.closeDropdown}
          isOpen={this.state.isOpen}
          parentEl={'btn-context-playlist-billboard'}
        />
      );
    }
  }

  render() {
    const isPlaylist = false;
    const {description, imageUrl, listItems, title, type, footer } = this.props;

    return (
      <div className='song-list'>
        <header className='song-list'>
          <ListBillboard
            imageUrl={imageUrl}
            type={type}
            title={title}
            subTitle={description}
            footer={footer}
            />
        </header>
        <div className='play-follow'>
          <button onClick={this.handlePlay} className='play'>Play</button>
          {this.renderFollowButton()}
          {this.renderContextButton()}
        </div>
        {this.renderContextDropdown()}
        <SongListIndex listItems={this.props.listItems} type={type}/>
      </div>
    );
  }
}

export default SongList;
