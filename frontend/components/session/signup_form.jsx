import React from 'react';
import { Link, withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  navLink() {
  return <Link to="/login">log in instead</Link>;
  }

  renderErrors() {
    return(
      <ul>
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
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          {this.renderErrors()}
          <div className="signup-form">
            <input type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.update("username")}
              className="signup-input" />

            <input type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="signup-input" />

            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
