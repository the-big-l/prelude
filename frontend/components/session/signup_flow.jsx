import React from 'react';
import { Link, hashHistory } from 'react-router';

const handleGuestLogin = login => e => {
  const user = {username: 'guest', password: 'password'};
  login({user});
  hashHistory.push('/');
};

const SignupFlow = ({ login }) => (
  <div className='signup-flow'>
    <div className='large-logo'>
      <img src='https://play.spotify.edgekey.net/client/a59725d/images/logo.png' />
    </div>
    <button className='guest' onClick={handleGuestLogin(login)}>Sign in as a guest</button>
    <button onClick={e => hashHistory.push('/signup')}>Sign up with your email address</button>
    <hr/>
    <div className='text-small has-account'>
      <Link to='/login'>
        Already have an account? Log in here.
      </Link>
    </div>
  </div>
);

export default SignupFlow;
