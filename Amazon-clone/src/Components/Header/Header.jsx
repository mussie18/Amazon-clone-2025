import React from "react";
import styles from "./Header.module.css";
import AmazonLogo from "../../assets/images/amazonLogo.png";
// import USA_Flag from "../../assets/images/Flag_of_the_United_States.png";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <section>
        <div className={styles.header_container}>
          <div className={styles.logo_container}>
            <a href="/">
              <img src={AmazonLogo} alt="amazon logo" />
            </a>
            <div className={styles.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={styles.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Product" />
            <BsSearch size={45} />
          </div>
          <div className={styles.order_container}>
            <a href="" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                alt="America flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            <a href="">
              <div>
                <p>Sign In </p>
                <span>Account & Lists</span>
              </div>
            </a>
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            <a href="" className={styles.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
