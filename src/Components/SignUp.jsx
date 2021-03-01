import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Login.css';
import { SignUpF } from '../Utilities';
export class SignUp extends React.Component {
  render() {
    return (
      <div className="login__Box">
        <div className="spotiLogin">
          <img
            alt="SpotiIcon"
            className="spotiIcon"
            src="https://image.flaticon.com/icons/png/512/2111/2111624.png"
          />
          <h1>Welcome to Spotifry</h1>
        </div>
        <h2 className="login">Sign up</h2>
        <div className="textbox">
          <i className="iconLogin fas fa-user"></i>
          <input type="text" placeholder="Username" id="SignUpUsername" />
        </div>

        <div className="textbox">
          <i className="iconLogin fas fa-key"></i>
          <input type="password" placeholder="Password" id="SignUpPassword" />
        </div>

        <span className="suggestSU">
          Already have an account ?
          <Link className="signUpLink" to="/">
            Login
          </Link>
        </span>
        
        <a
          className="loginButton"
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
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign up
        </a>
      </div>
    );
  }
}
