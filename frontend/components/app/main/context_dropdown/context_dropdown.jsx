import React from 'react';
import Modal from 'react-modal';

class ContextDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.getParent = this.getParent.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const playlist = this.state;
    this.props.deleteFunction(this.props.deleteId);
    this.props.closeDropdown();
  }

  dropdownShown() {
    return this.props.isShown ? 'show' : 'hide';
  }

   getParent() {
    return document.querySelector(`#${this.props.parentEl}`);
  }

  isPlaylist() {
    if (this.props.type === "playlist") {
      return (
        <ul>
          {this.props.isSong ? null : <li>Update</li>}
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
      </Modal>
    );
  }
}

export default ContextDropdown;
