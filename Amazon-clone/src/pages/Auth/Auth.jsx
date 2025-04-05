import React, { useState, useContext } from "react";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/actionTypes";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();
    if (e.target.name == "signIn") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInofrmation) => {
          dispatch({
            type: Type.SET_USER,
            user: userInofrmation.user,
          });
        })
        .catch((err) => console.log(err));
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInofrmation) => {
          dispatch({
            type: Type.SET_USER,
            user: userInofrmation.user,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section className={styles.login}>
      {/* logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={styles.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signIn"
            onClick={authHandler}
            className={styles.SignIn_btn}
          >
            Sign In
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-ing you agree to the AMAZON CLONE (which is not real;
          created for educational purpose only) conditions of Use & Sale. Please
          see the functionality and rate the project.
        </p>
        {/* create account btn */}
        <button
          type="submit"
          name="signUp"
          onClick={authHandler}
          className={styles.register_btn}
        >
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
};

export default Auth;
