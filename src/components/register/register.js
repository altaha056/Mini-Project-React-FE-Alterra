import "./register.css";
import Profile from "../profile/profile";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="reg-container">
        <div className="reg-header">
          <div className="login-title">
            <h1>Register</h1>
          </div>
        </div>
        <div className="form-container">
          <form>
            <div className="login-input">
              <p>username</p>
              <input type="text" />
            </div>
            <div className="login-input">
              <p>email</p>
              <input type="email" />
            </div>
            <div className="login-input">
              <p>password</p>
              <input type="password" />
            </div>
            <div className="login-input">
              <p>retype password</p>
              <input type="password" />
            </div>
            <button className="login-button">
              <p>Register</p>
            </button>
            <br />
            <Link to="/login">
              <button className="register-button">
                <p>Login</p>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
