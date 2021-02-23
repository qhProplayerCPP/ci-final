import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/SignUp.css';
import { SignUpF } from '../Utilities';
export class SignUp extends React.Component {
  render() {
    return (
      <div className="LoginBox">
        <h1>Sign up</h1>
        <label>Username:</label>
        <input type="text" id="SignUpUsername" />
        <label>Password:</label>
        <input type="text" id="SignUpPassword" />
        <Link to="/">Login</Link>
        <button
          onClick={() => {
            const data = {
              username: document.getElementById('SignUpUsername').value,
              password: document.getElementById('SignUpPassword').value,
            };
            if (data.username === '' || data.password === '') {
              alert('Input invalid');
            } else {
              SignUpF(data).then((e) => {
                if (!e) {
                  alert('Existed');
                }
              });
            }
          }}
        >
          Sign up
        </button>
      </div>
    );
  }
}
