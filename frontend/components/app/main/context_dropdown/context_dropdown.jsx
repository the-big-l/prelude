import React from 'react';
import Modal from 'react-modal';

class ContextDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete(e) {
    e.preventDefault();
    const playlist = this.state;
    this.props.handleDelete(this.props.deleteId)
      .then(() => this.props.closeDropdown());
  }

  dropdownShown() {
    return this.props.isShown ? 'show' : 'hide';
  }

   getParent() {
    return document.querySelector('#btn-context');
  }

  render() {
    const { isOpen, closeDropdown } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        arentSelector={getParent}
        onRequestClose={closeDropdown}
        className={`context-dropdown-modal ${this.dropdownShown()}`}
        overlayClassName={`context-dropdown-overlay ${this.dropdownShown()}`}
        contentLabel="Modal">
        <div className="context-dropdown">
          <ul>
            <li onClick={this.handleDelete}>Delete</li>
          </ul>
        </div>
      </Modal>
    );
  }
}

export default ContextDropdown;
