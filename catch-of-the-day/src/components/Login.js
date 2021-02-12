import { PropTypes } from 'prop-types';
import React from 'react';

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory.</p>
    <button className="github" onClick={() => props.authenticate('Github')}>
      Log in With Github
    </button>
  </nav>
);

Login.prototypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login;