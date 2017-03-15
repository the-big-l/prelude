import React from 'react';
import { Link, hashHistory } from 'react-router';

const handleGuestLogin = login => e => {
  const user = {username: 'guest', password: 'password'};
  login({user});
  hashHistory.push('/');
};

const SignupFlow = ({ login }) => (
  <div className='signup-flow'>
    <button onClick={handleGuestLogin(login)}>Guest</button>
    <Link to='/signup'>
      <button>Sign up with your email address</button>
    </Link>
  </div>
);

export default SignupFlow;
