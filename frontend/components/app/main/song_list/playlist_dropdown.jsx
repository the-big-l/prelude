import React from 'react';
import Modal from 'react-modal';

class PlaylistDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentWillMount() {
    this.props.requestUserPlaylists(this.props.currentUser);
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

  playlistShown() {
    return this.props.playlistIsShown ? 'show' : 'hide';
  }

  render() {
    const playlists = this.props.userPlaylists.map((playlist, idx) => {
      return (
        <li onClick={this.handleAdd(playlist.id)} key={idx}>{playlist.name}</li>
      );
    });

    const { isOpen, closePlaylistModal, playlistIsShown } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closePlaylistModal}
        className={`playlist-dropdown ${this.playlistShown()}`}
        overlayClassName={`playlist-dropdown-overlay ${this.playlistShown()}`}
        contentLabel="Modal">
        <h4>Add to playlist</h4>
        <ul className='playlist-dropdown-list'>
          {playlists}
        </ul>
      </Modal>
    );
  }
}

export default PlaylistDropdown;
