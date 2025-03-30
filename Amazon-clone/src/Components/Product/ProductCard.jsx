import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormater from "../CurrencyFormater/CurrencyFormater";
import styles from "./product.module.css";

const ProductCard = ({ product }) => {
  const { image, title, rating, price } = product;
  return (
    <div className={styles.card_container}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={styles.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* rating counter */}
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormater amount={price} />
        </div>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
