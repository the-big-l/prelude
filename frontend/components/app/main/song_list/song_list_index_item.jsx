import React from 'react';
import PlayListDropdownContainer from './playlist_dropdown_container';

class SongListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  renderDropdown() {
    if (this.state.isOpen) {
      return (
        <PlayListDropdownContainer
          toggleDropdown={this.toggleDropdown}
          songId={this.props.song.id}
          isOpen={this.state.isOpen}
        />
      );
    }
  }

  toggleDropdown(e) {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const {song: {title, artist, album}} = this.props;

    return (
      <tr className='song-list-index_item'>
        <td>
          <div className='add-btn-wrapper'>
            <button onClick={this.toggleDropdown} className='playlist-add'></button>
            {this.renderDropdown()}
          </div>
        </td>
        <td><div>{this.props.trackNo}</div></td>
        <td><div className='song'>{title}</div></td>
        <td><div>{artist}</div></td>
        <td><div>{album}</div></td>
      </tr>
    );
  }
}

export default SongListIndexItem;
