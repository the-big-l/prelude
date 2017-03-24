import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';

class ProfileDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isOpen, closeModal } = this.props;

    const customStyle = {
      content : {
        top : '36px',
        right: '20px'
      }
    }

    return (
      <Modal
        isOpen={isOpen}
        style={customStyle}
        onRequestClose={closeModal}
        className={'pd-modal context-dropdown-modal shown'}
        overlayClassName={'pd-overlay context-dropdown-overlay shown'}
        contentLabel="Modal">
        <div className="context-dropdown">
          <ul>
            <li><Link to='/profile'>Profile</Link></li>
            <li onClick={this.handleLogout}>Logout</li>
          </ul>
        </div>
      </Modal>
    );
  }
}

export default ProfileDropdown;
