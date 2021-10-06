import "./register.css";
import Profile from "../profile/profile";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { SignIn } from "../../graphql/mutation";
import { SignUp } from "../../graphql/mutation";
import { useHistory } from "react-router";
import LoadingAnimation from "../loadinganimation/LoadingAnimation";
import { useMutation } from "@apollo/client";

function Register() {
  const [errorRegister, setErrorRegister] = useState("");
  const emailEl = useRef();
  const userNameEl = useRef();
  const passwordEl = useRef();
  const confirmPasswordEl = useRef();

  const [register, { data, loading: loadingRegister }] = useMutation(SignUp);

  const history = useHistory();

  const onRegistHandler = async (e) => {
    e.preventDefault();
    const username = userNameEl.current.value;
    const email = emailEl.current.value;
    const password = passwordEl.current.value;
    const confirmPassword = confirmPasswordEl.current.value;

    if (password === confirmPassword) {
      register({ variables: { object: { email, username, password } } });
    } else {
      setErrorRegister("password not match");
    }
  };

  useEffect(() => {
    if (data?.insert_antonio_user_one === null && !loadingRegister) {
      setErrorRegister("already existed");
    } else if (data?.insert_antonio_user_one.id) {
      localStorage.setItem("user_id", data?.insert_antonio_user_one.id);
      history.push("/profile");
    }
  }, [data, history, loadingRegister]);

  if (loadingRegister) {
    return <LoadingAnimation />;
  }

  return (
    <>
      <div className="reg-container">
        <div className="reg-header">
          <div className="login-title">
            <h1>Register</h1>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={onRegistHandler}>
            <div className="login-input flex">
              <p>
                username
                {errorRegister !== "" && (
                  <p className="error">{errorRegister}</p>
                )}
              </p>
              <input type="text" ref={userNameEl} required />
            </div>
            <div className="login-input">
              <p>email</p>
              <input type="email" ref={emailEl} required />
            </div>
            <div className="login-input">
              <p>password</p>
              <input type="password" ref={passwordEl} required />
            </div>
            <div className="login-input">
              <p>retype password</p>
              <input type="password" ref={confirmPasswordEl} required />
            </div>
            <button className="login-button" type="submit">
              <p>Register</p>
            </button>
            <br />
            <Link to="/login">
              <button className="register-button">
                <p>Already have account? Login</p>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
