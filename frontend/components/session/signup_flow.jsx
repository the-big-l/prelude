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
    <button className='button' onClick={handleGuestLogin(login)}>Guest</button>
    <Link to='/signup'>
      <button className='button' >Sign up with your email address</button>
    </Link>
    <Link to='/login'>
      <p>Already have an account? Log in here.</p>
    </Link>
  </div>
);

export default SignupFlow;
