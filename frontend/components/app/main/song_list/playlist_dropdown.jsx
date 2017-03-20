import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';

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

  render() {
    const playlists = this.props.userPlaylists.map((playlist, idx) => {
      return (
        <li onClick={this.handleAdd(playlist.id)} key={idx}>{playlist.name}</li>
      );
    });

    return (
      <ul className='playlist-dropdown'>
        {playlists}
      </ul>
    );
  }
}

export default enhanceWithClickOutside(PlaylistDropdown);
