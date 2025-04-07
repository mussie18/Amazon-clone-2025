import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormater from "../CurrencyFormater/CurrencyFormater";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/actionTypes";

const ProductCard = ({ product, flex, renderDesc, renderAddToCart }) => {
  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);

  const AddToCart = () => {
    dispatch({
      type: Type.ADD_TO_CART,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${styles.card_container} ${
        flex ? styles.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "730px" }}>{description}</div>}
        <div className={styles.rating}>
          {/* rating */}
          <Rating value={rating?.rate || 0} precision={0.1} />
          {/* rating counter */}
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormater amount={price} />
        </div>
        {renderAddToCart && (
          <button className={styles.button} onClick={AddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
