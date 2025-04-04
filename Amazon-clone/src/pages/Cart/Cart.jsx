import React, { useContext } from "react";
import styles from "./Cart.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { Link } from "react-router-dom";
import CurrencyFormater from "../../Components/CurrencyFormater/CurrencyFormater";

const Cart = () => {
  const [{ cart, user }, dispatch] = useContext(DataContext);

  const total = cart.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shopping Cart</h3>
          <hr />
          {cart?.length == 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            cart?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderAddToCart={false}
                />
              );
            })
          )}
        </div>
        {cart?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p>Subtotal ({cart?.length} items)</p>
              <CurrencyFormater amount={total} />
              <h4>Total</h4>
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
