import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/user");
  }, [user, loading, navigate]);

  return (
    <div className="mx-auto col-4">
      <div className="">
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-2">
          Sign Up
        </button>
        <button
          className="login__btn login__google btn btn-primary ms-2 mt-2"
          onClick={signInWithGoogle}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
