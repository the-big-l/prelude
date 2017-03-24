import React from 'react';
import { Link, withRouter } from 'react-router';
import ProfileDropdown from './profile_dropdown';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    debugger
    return (
      <header className='app-header'>
        <div className='right-nav'>
          <div onClick={this.openModal} className='current-user-info'>
            <p>{this.props.currentUser.username}</p><button id='pd-btn'>&or;</button>
          </div>
          <ProfileDropdown
            isOpen={this.state.isOpen}
            closeModal={this.closeModal}
            logout={this.props.logout}
            />
        </div>
      </header>
    );
  }
}


export default withRouter(AppHeader);
