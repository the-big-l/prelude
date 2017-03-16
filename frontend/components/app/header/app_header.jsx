import React from 'react';
import { Link, withRouter } from 'react-router';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.router.push("/welcome");
    }
  }

  render() {
    return (
      <header className='app-header'>
        <div className='right-nav'>
          <div className='current-user-info'>
            {this.props.currentUser.username}
          </div>
          <ul className='user-dropdown'>
            <li onClick={this.props.logout}>
              logout
            </li>
          </ul>
        </div>
      </header>
    );
  }
}


export default withRouter(AppHeader);
