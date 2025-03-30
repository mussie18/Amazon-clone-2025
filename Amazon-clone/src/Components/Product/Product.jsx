import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./product.module.css";

const Product = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch products. Please try again later.");
      });
  }, []);

  if (error) {
    return (
      <section>
        <p>{error}</p>
      </section>
    );
  }

  if (!products) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className={styles.product_container}>
      {products.map((singleProduct) => (
        <ProductCard product={singleProduct} key={singleProduct.id} />
      ))}
    </section>
  );
};

export default Product;
