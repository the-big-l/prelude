import React from 'react';
import Modal from 'react-modal';

class ContextDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.getParent = this.getParent.bind(this);
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
    return document.querySelector(`#${this.props.parentEl}`);
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
        parentSelector={this.getParent}
        onRequestClose={closeDropdown}
        className={`context-dropdown-modal ${this.dropdownShown()}`}
        overlayClassName={`context-dropdown-overlay ${this.dropdownShown()}`}
        style={customStyle}
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
