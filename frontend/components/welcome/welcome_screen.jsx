import React from 'react';
import SignupFlowContainer from '../session/signup_flow_container';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import LoginFeatures from './login_features';

class WelcomeScreen extends React.Component {
  renderLoginMethod()  {
    switch (this.props.currentScreen) {
      case 'login':
        return <LoginFormContainer />;
      case 'signup':
        return <SignupFormContainer />;
      default:
        return <SignupFlowContainer />;
    }
  }

  render() {
    return (
      <div className='welcome-screen'>
        <div className='welcome-container'>
          <div className='login-method'>
            {this.renderLoginMethod()}
          </div>
          <LoginFeatures />
        </div>
      </div>
    );
  }
}

export default WelcomeScreen;
