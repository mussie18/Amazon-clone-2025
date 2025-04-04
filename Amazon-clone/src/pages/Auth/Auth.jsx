import React from "react";
import styles from "./Auth.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { Link } from "react-router-dom";

const Auth = () => {
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
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={styles.SignIn_btn}>Sign In</button>
        </form>
        {/* agreement */}
        <p>
          By signing-ing you agree to the AMAZON CLONE (which is not real;
          created for educational purpose only) conditions of Use & Sale. Please
          see the functionality and rate the project.
        </p>
        {/* create account btn */}
        <button className={styles.register_btn}>Create your Amazon Account</button>
      </div>
    </section>
  );
};

export default Auth; // logo link
