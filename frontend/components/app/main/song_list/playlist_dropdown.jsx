import React from 'react';
import Modal from 'react-modal';

class PlaylistDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentWillMount() {
    this.props.requestUserPlaylists(currentUser);
  }

  handleAdd(playlistId) {
    const that = this;
    return e => {
      const playlist_member = {
        song_id: this.props.songId,
        playlist_id: playlistId
      };
      that.props.addToPlaylist({playlist_member});
    };
  }

  handleClickOutside() {
    this.props.toggleDropdown();
  }

  getParent() {
    return document.querySelector('#main-nav');
  }

  render() {
    const playlists = this.props.userPlaylists.map((playlist, idx) => {
      return (
        <li onClick={this.handleAdd(playlist.id)} key={idx}>{playlist.name}</li>
      );
    });

    const { isOpen, toggleDropdown} = this.props;

    const customStyle = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.3)'
      },
      content : {
        position                   : 'absolute',
        top                        : '40px',
        left                       : '40px',
        right                      : '40px',
        bottom                     : '40px',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px'

      }
    }

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleDropdown}
        parentSelector={this.getParent}
        closeTimeoutMS={300}
        style={customStyle}
        contentLabel="Modal"
      >
        <ul className='playlist-dropdown'>
          {playlists}
        </ul>
      </Modal>
    );
  }
}

export default PlaylistDropdown;
