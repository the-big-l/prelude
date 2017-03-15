import React from 'react';
import { Link, hashHistory } from 'react-router';

const handleGuestLogin = login => e => {
  const user = {username: 'guest', password: 'password'};
  login({user});
  hashHistory.push('/');
};

const SignupFlow = ({ login }) => (
  <div className='signup-flow'>
    <img src='https://play.spotify.edgekey.net/client/a59725d/images/logo.png' />
    <button className='guest' onClick={handleGuestLogin(login)}>Sign in as a guest</button>
    <Link to='/signup'>
      <button>Sign up with your email address</button>
    </Link>
    <Link to='/login'>
      <p className='text-small'>Already have an account? Log in here.</p>
    </Link>
  </div>
);

export default SignupFlow;
