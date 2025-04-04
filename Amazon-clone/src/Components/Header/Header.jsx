import React, { useContext } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import AmazonLogo from "../../assets/images/amazonLogo.png";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {
  const [state, dispatch] = useContext(DataContext);
  const cart = state.cart;

  return (
    <>
      <section className={styles.fixed}>
        <div className={styles.header_container}>
          <div className={styles.logo_container}>
            <Link to="/">
              <img src={AmazonLogo} alt="amazon logo" />
            </Link>
            <div className={styles.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={styles.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Product" />
            <BsSearch size={40} />
          </div>
          <div className={styles.order_container}>
            <Link to="" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                alt="America flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="/auth">
              <div>
                <p>Sign In </p>
                <span>Account & Lists</span>
              </div>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={styles.cart}>
              <BiCart size={35} />
              <span>{cart.length}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
