import { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../Store/AuthContext";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPass = passwordInputRef.current.value;
    setIsLoading(true);

    try {
      if (isLogin) {
        const res = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDf_sfgPLzQu58B72m9PEnCJ3r_FiIy3ag",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPass,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        setIsLoading(false);
        if (res.ok) {
          const data = await res.json();
          authCtx.login(data.idToken);
          localStorage.setItem("email", data.email);

          navigate("/store");
          // console.log(data);
        } else {
          const data = await res.json();
          throw new Error(data.error.message);
        }
      } else {
        const res = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDf_sfgPLzQu58B72m9PEnCJ3r_FiIy3ag",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPass,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        setIsLoading(false);
        if (res.ok) {
          const data = await res.json();

          navigate("/login");

          alert("user added");
        } else {
          const data = await res.json();
          throw new Error(data.error.message);
        }
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>

          <input type="password" name="password" ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create new account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
