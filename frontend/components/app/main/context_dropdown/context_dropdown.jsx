import React from 'react';
import Modal from 'react-modal';
import UpdatePlaylistFormContainer from '../../playlist_form/update_playlist_form_container';

class ContextDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false,
      isFormShown: false
    };
    this.getParent = this.getParent.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.openFormModal = this.openFormModal.bind(this);
    this.closeFormModal = this.closeFormModal.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const playlist = this.state;
    this.props.deleteFunction(this.props.deleteId);
    this.props.closeDropdown();
  }

  handleUpdate(e) {
    e.preventDefault();
    this.openFormModal();
  }

  dropdownShown() {
    return this.props.isShown ? 'show' : 'hide';
  }

   getParent() {
    return document.querySelector(`#${this.props.parentEl}`);
  }

  openFormModal() {
    this.setState({ isFormOpen: true });
    setTimeout(() => this.setState({ isFormShown: true }), 0);
  }

  closeFormModal() {
    this.setState({ isFormShown: false });
    this.props.closeDropdown();
    setTimeout(() => this.setState({ isFormOpen: false }), 500);
  }

  isPlaylist() {
    if (this.props.type === "playlist") {
      return (
        <ul>
          {this.props.isSong ? null : <li onClick={this.handleUpdate}>Update</li>}
          <li onClick={this.handleDelete}>Delete</li>
        </ul>
      );
    } else {
      return (<li onClick={this.props.closeDropdown}>{'no-op'}</li>);
    }
  }

  render() {
    const { isOpen, closeDropdown } = this.props;
    // .position() uses position relative to the offset parent
    const pos = $(`#${this.props.parentEl}`).position();
    // .outerWidth() takes into account border and padding
    const width = $(`#${this.props.parentEl}`).outerWidth();
    const customStyle = {
      content : {
        top : `${pos.top + 20}px`,
        left: `${(pos.left + width - 200)}px`
      }
    }

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeDropdown}
        className={`context-dropdown-modal ${this.props.dropdownShown}`}
        overlayClassName={`context-dropdown-overlay ${this.props.dropdownShown}`}
        style={customStyle}
        contentLabel="Modal">
        <div className="context-dropdown">
          {this.isPlaylist()}
        </div>
        <UpdatePlaylistFormContainer
          isOpen={this.state.isFormOpen}
          isFormShown={this.state.isFormShown}
          closeFormModal={this.closeFormModal}
        />
      </Modal>
    );
  }
}

export default ContextDropdown;
