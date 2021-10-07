import "./login.css";
import Profile from "../profile/profile";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router";
import { SignIn } from "../../graphql/mutation";
import LoadingAnimation from "../loadinganimation/LoadingAnimation";

function Login() {
  const [errorLogin, setErrorLogin] = useState("");
  const userNameEl = useRef();
  const passwordEl = useRef();

  const [logIn, { data: dataLogIn, loading: loadingLogIn }] =
    useLazyQuery(SignIn);

  const history = useHistory();

  const onLogInHandler = (e) => {
    e.preventDefault();
    const username = userNameEl.current.value;
    const password = passwordEl.current.value;
    logIn({ variables: { username, password } });
  };

  useEffect(() => {
    console.log(dataLogIn);
    if (dataLogIn?.antonio_user.length > 0 && !loadingLogIn) {
      localStorage.setItem("user_id", dataLogIn?.antonio_user[0].id);
      history.push("/profile");
    } else if (dataLogIn?.antonio_user.length === 0) {
      setErrorLogin("username or password is invalid");
    }
  }, [dataLogIn, history, loadingLogIn]);

  if (loadingLogIn) {
    return <LoadingAnimation />;
  }

  return (
    <>
      <div className="login-container">
        <div className="login-header">
          <div className="login-title">
            <h1>Join The Club</h1>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={onLogInHandler}>
            <div className="login-input">
              {errorLogin !== "error" && <p className="error">{errorLogin}</p>}
              <p>username</p>
              <input type="text" ref={userNameEl} />
            </div>
            <div className="login-input">
              <p>password</p>
              <input type="password" ref={passwordEl} />
            </div>
            <button className="login-button" type="submit">
              <p>Login</p>
            </button>
            <br />
            <Link to="/register">
              <button className="register-button">
                <p>Already have account? Register</p>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
