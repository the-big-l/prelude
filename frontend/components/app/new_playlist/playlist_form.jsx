import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentWillUnmount() {
    // this.props.clearErrors();
  }

  update(field) {
    return e => {
      // this.props.clearErrors();
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = this.state;
    this.props.createPlaylist({playlist})
      .then(playlist => this.props.router.push(`/playlists/${playlist.id}`))
      .then(() => this.props.closeFormModal());
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.closeFormModal();
  }

  renderErrors() {
    return(
      <ul className='form-errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  formShown() {
    return this.props.isFormShown ? 'show' : 'hide';
  }

  render() {
    const { isOpen, closeFormModal } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeFormModal}
        className={`playlist-form-modal ${this.formShown()}`}
        overlayClassName={`playlist-form-overlay ${this.formShown()}`}
        contentLabel="Modal">
        <div className="playlist-form-container">
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit} className="playlist-form-box">
            <h3>Create Playlist</h3>
            <div className="playlist-form">
              <label>Name</label>
              <input type="text"
                placeholder="New Playlist"
                value={this.state.name}
                onChange={this.update("name")}
                className="playlist-input" />

              <label>Description</label>
              <textarea
                placeholder="password"
                value={this.state.description}
                onChange={this.update("description")}
                className="playlist-input" />
            </div>
            <div className='button-wrapper'>
              <button onClick={this.handleCancel} className='cancel'>Cancel</button>
              <button className='create' type="submit">create</button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default withRouter(PlaylistForm);
