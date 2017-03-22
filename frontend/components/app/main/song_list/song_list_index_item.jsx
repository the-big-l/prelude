import React from 'react';
import PlayListDropdownContainer from './playlist_dropdown_container';

class SongListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistIsOpen: false,
      playlistIsShown: false
    };
    this.openPlaylistModal = this.openPlaylistModal.bind(this);
    this.closePlaylistModal = this.closePlaylistModal.bind(this);
  }

  renderAddPlaylist() {
    if (this.state.playlistIsOpen) {
      return (
        <PlayListDropdownContainer
          closePlaylistModal={this.closePlaylistModal}
          playlistIsShown={this.state.playlistIsShown}
          songId={this.props.song.id}
          isOpen={this.state.playlistIsOpen}
        />
      );
    }
  }

  renderContextDropdown() {
    if (this.state.contextDropdownIsOpen) {
      return (
        <SongContextDropdownContainer
          closeDropdownModal={this.closeDropdown}
          dropdownIsShown={this.state.dropdownIsShown}
          songId={this.props.song.id}
          isOpen={this.state.dropdownIsOpen}
        />
      );
    }
  }

  openPlaylistModal() {
    this.setState({ playlistIsOpen: true });
    setTimeout(() => this.setState({ playlistIsShown: true }), 0);
  }

  closePlaylistModal() {
    this.setState({ playlistIsShown: false });
    setTimeout(() => this.setState({ playlistIsOpen: false }), 500);
  }

  render() {
    const {song: {title, artist, album}} = this.props;

    return (
      <tr className='song-list-index_item'>
        <td>
          <div className='add-btn-wrapper'>
            <button
              onClick={this.openPlaylistModal}
              className='playlist-add'>
            </button>
            {this.renderAddPlaylist()}
          </div>
        </td>
        <td><div>{this.props.trackNo}</div></td>
        <td><div className='song'>{title}</div></td>
        <td><div>{artist}</div></td>
        <td><div>{album}</div></td>
        <td>
          <button className='context-btn-wrapper'>{'...'}{this.renderContextDropdown()}</button>
        </td>
      </tr>
    );
  }
}

export default SongListIndexItem;
