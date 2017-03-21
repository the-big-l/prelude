import React from 'react';
import { Link } from 'react-router';
import PlaylistFormContainer from '../playlist_form/playlist_form_container';

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
        <Link to={`/playlists/${playlist.id}`} key={idx}><li>{playlist.name}</li></Link>
      );
    });

    return (
      <div id='main-nav'>
        <div className='list-holder'>
          <div className='side-list-container'>
            <h4>Browse</h4>
            <ul className='side-list'>
              <li><Link to='/songs'>Songs</Link></li>
              <li><Link to='/main'>Main</Link></li>
            </ul>
          </div>
          <div className='side-list-container'>
            <h4>Playlists</h4>
            <ul className='side-list'>
              {playlists}
            </ul>
          </div>
        </div>
        <aside
          className='new-playlist-btn-container'
          onClick={this.openFormModal}>
          <div className='plus-icon'></div>
          <p>New Playlist</p>
        </aside>
        <PlaylistFormContainer
          isOpen={this.state.isFormOpen}
          isFormShown={this.state.isFormShown}
          closeFormModal={this.closeFormModal}
        />
      </div>
    );
  }
}

export default MainNav;
