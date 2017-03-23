import React from 'react';
import { Link } from 'react-router';
import CreatePlaylistFormContainer from '../playlist_form/create_playlist_form_container';
import PlaylistBrowseIndexContainer from './browse_index/playlist_browse_index_container';
import NavBrowseIndexContainer from './browse_index/nav_browse_index_container';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false,
      isFormShown: false
    };
    this.openFormModal = this.openFormModal.bind(this);
    this.closeFormModal = this.closeFormModal.bind(this);
  }

  componentWillMount() {
    this.props.requestUserPlaylists(this.props.currentUser);
  }

  openFormModal() {
    this.setState({ isFormOpen: true });
    setTimeout(() => this.setState({ isFormShown: true }), 0);
  }

  closeFormModal() {
    this.setState({ isFormShown: false });
    setTimeout(() => this.setState({ isFormOpen: false }), 500);
  }

  render() {
    const playlists = this.props.userPlaylists.map((playlist, idx) => {
      return (
        <Link to={`/playlists/${playlist.id}`} key={playlist.id}><li>{playlist.name}</li></Link>
      );
    });

    return (
      <div id='main-nav'>
        <div className='bi-container'>
          <div className='bi-wrapper'>
            <NavBrowseIndexContainer />
          </div>
          <div className='bi-wrapper'>
            <PlaylistBrowseIndexContainer />
          </div>
        </div>
        <aside
          className='new-playlist-btn-container'
          onClick={this.openFormModal}>
          <div className='plus-icon'></div>
          <p>New Playlist</p>
        </aside>
        <CreatePlaylistFormContainer
          isOpen={this.state.isFormOpen}
          isFormShown={this.state.isFormShown}
          closeFormModal={this.closeFormModal}
        />
      </div>
    );
  }
}

export default MainNav;
