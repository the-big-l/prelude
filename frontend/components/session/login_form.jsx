import React from 'react';
import { Link, withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => {
      this.props.clearErrors();
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  handleGuestLogin(login) {
    return e => {
      const user = {username: 'guest', password: 'password'};
      login({user});
      this.props.router.push("/");
    }
  };

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

  render() {
    return (
      <div className="login-form-container">
        <div className='small-logo'>
          <img src='https://play.spotify.edgekey.net/client/a59725d/images/logo.png' />
        </div>
        {this.renderErrors()}
        <button
          className='guest'
          onClick={this.handleGuestLogin(login)}>
            Sign in as a guest
        </button>
        <h1 className='spacer'>or</h1>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            <label>Username</label>
            <input type="text"
              placeholder="Prelude username"
              value={this.state.username}
              onChange={this.update("username")}
              className="login-input" />

            <label>Password</label>
            <input type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input" />

            <button type="submit">Login</button>
          </div>
        </form>
        <div className='text-small footer'>
          Don't have an account? <Link to='/welcome'>Sign up here!</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
