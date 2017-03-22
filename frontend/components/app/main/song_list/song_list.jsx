import React from 'react';
import ListBillboard from './list_billboard';
import SongListIndex from './song_list_index';
import PlaylistContextDropdownContainer from './playlist_context_dropdown_container';

class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false}
    this.handlePlay = this.handlePlay.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
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

  isPlaylist() {
    return this.props.type === 'playlist';
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
    const {description, listItems, title, type, author } = this.props;

    return (
      <div className='song-list'>
        <header className='song-list'>
          <ListBillboard
            type={type}
            title={title}
            subTitle={description}
            author={author}
            count={listItems.length}
            />
        </header>
        <div className='play-follow'>
          <button onClick={this.handlePlay} className='play'>Play</button>
          {this.isPlaylist() ? <button>Follow</button> : null}
          {this.isPlaylist() ? <button id={'btn-context-playlist-billboard'} onClick={this.openDropdown}>{'...'}</button> : null}
        </div>
        {this.renderContextDropdown()}
        <SongListIndex listItems={this.props.listItems} type={type}/>
      </div>
    );
  }
}

export default SongList;
