import React from 'react';
import PlayListDropdownContainer from './playlist_dropdown_container';
import SongContextDropdownContainer from './song_context_dropdown_container';

class SongListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistIsOpen: false,
      playlistIsShown: false,
      dropdownIsOpen: false,
      dropdownIsShown: false
    };
    this.openPlaylistModal = this.openPlaylistModal.bind(this);
    this.closePlaylistModal = this.closePlaylistModal.bind(this);
    this.openContextDropdown = this.openContextDropdown.bind(this);
    this.closeContextDropdown = this.closeContextDropdown.bind(this);
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
    if (this.state.dropdownIsOpen) {
      return (
        <SongContextDropdownContainer
          parentEl={`btn-context-${this.props.idx}`}
          closeDropdownModal={this.closeContextDropdown}
          dropdownIsShown={this.state.dropdownIsShown}
          songId={this.props.song.id}
          isOpen={this.state.dropdownIsOpen}
          listItem={this.props.listItem}
          deleteId={this.props.listItem.member_id}
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

  openContextDropdown() {
    this.setState({ dropdownIsOpen: true });
    setTimeout(() => this.setState({ dropdownIsShown: true }), 0);
  }

  closeContextDropdown() {
    this.setState({ dropdownIsShown: false });
    setTimeout(() => this.setState({ dropdownIsOpen: false }), 500);
  }

  render() {
    const {listItem: {song}} = this.props;

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
        <td><div>{this.props.order}</div></td>
        <td><div className='song'>{song.title}</div></td>
        <td><div>{song.artist}</div></td>
        <td><div>{song.album}</div></td>
        <td>
          <button
            id={`btn-context-${this.props.idx}`}
            onClick={this.openContextDropdown}>{'...'}{this.renderContextDropdown()}</button>
        </td>
      </tr>
    );
  }
}

export default SongListIndexItem;
