import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Login.css';
import { SignIn } from '../Utilities';

export class Login extends React.Component {
  render() {
    return (
      <div className="LoginBox">
        <h1>Login</h1>
        <label>Username:</label>
        <input type="text" id="LoginUsername" />
        <label>Password:</label>
        <input type="text" id="LoginPassword" />
        <Link to="/sign-up">Sign up</Link>
        <button
          onClick={() => {
            const data = {
              username: document.getElementById('LoginUsername').value,
              password: document.getElementById('LoginPassword').value,
            };
            SignIn(data).then((e) => {
              if (!e) {
                alert('User invalid');
              }
            });
          }}
        >
          Sign in
        </button>
      </div>
    );
  }
}
