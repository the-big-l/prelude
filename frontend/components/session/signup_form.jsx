import React from 'react';
import { Link, withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', first_name: '', last_name: '' };
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
    this.props.signup({user});
  }

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
      <div className="signup-form-container">
        <div className='small-logo'>
          <img src='https://s3-us-west-1.amazonaws.com/prelude-prd/images/prelude-logo-large.png' />
        </div>
        {this.renderErrors()}
        <h3>Create your free Prelude account</h3>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className="signup-form">
            <label>First Name</label>
            <input type="text"
              placeholder="e.g. John"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              className="signup-input" />

            <label>Last Name</label>
            <input type="text"
              placeholder="e.g. Doe"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              className="signup-input" />

            <label>Username</label>
            <input type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.update("username")}
              className="signup-input" />

            <label>Password</label>
            <input type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="signup-input" />

            <button type="submit">Sign up</button>
          </div>
        </form>
        <div className='text-small footer'>
          <Link to='/welcome'>« Go back</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
