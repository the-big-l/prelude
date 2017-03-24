import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';

class ProfileDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleProfile(e) {
    this.props.closeModal();
    hashHistory.push('/profile');
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
            <li onClick={this.handleProfile}>Profile</li>
            <li onClick={this.handleLogout}>Logout</li>
          </ul>
        </div>
      </Modal>
    );
  }
}

export default ProfileDropdown;
