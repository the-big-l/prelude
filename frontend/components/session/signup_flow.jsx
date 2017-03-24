import React from 'react';
import { Link, withRouter } from 'react-router';


class SignupFlow extends React.Component {
  constructor(props) {
    super(props);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  handleGuestLogin(e) {
    const user = {username: 'guest', password: 'password'};
    this.props.login({user});
  }

  render() {
    return (
      <div className='signup-flow'>
        <div className='large-logo'>
          <img src='https://s3-us-west-1.amazonaws.com/prelude-prd/images/prelude-logo-large.png' />
        </div>
        <button className='guest' onClick={this.handleGuestLogin}>Sign in as a guest</button>
        <button onClick={e => this.props.router.push('/signup')}>Sign in with a new account</button>
        <hr/>
        <div className='text-small footer'>
          <Link to='/login'>
            Already have an account? Log in here.
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupFlow);
