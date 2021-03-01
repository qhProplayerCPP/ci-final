import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Login.css';
import { SignIn } from '../Utilities';

export class Login extends React.Component {
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
        <h2 className="login">Login</h2>

        <div className="textbox">
          <i className="iconLogin fas fa-user"></i>
          <input type="text" placeholder="Username" id="LoginUsername" />
        </div>

        <div className="textbox">
          <i className="iconLogin fas fa-key"></i>
          <input type="password" placeholder="Password" id="LoginPassword" />
        </div>
        <span className="suggestSU">
          Don't have an account ?
          <Link className="signUpLink" to="/sign-up">
            Sign up
          </Link>
        </span>
        <a
          className="loginButton"
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
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign In
        </a>
        
      </div>
    );
  }
}
