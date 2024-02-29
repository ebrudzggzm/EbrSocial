import "./login.css";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">EbrSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on EbrSocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton"><Link className="link" to="/profile">Log In</Link></button>
            <span className="loginForgot"><Link className="link" style={{color:'#1775ee'}}to="/register">Forgot Password?</Link></span>
            <button className="loginRegisterButton"><Link className="link" to="/register">Create a New Account</Link>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
