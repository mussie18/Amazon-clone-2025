import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./Product.module.css";
import Loader from "../../Components/Loader/Loader";

const Product = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch products. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      <section>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={styles.product_container}>
          {products?.map((singleProduct) => (
            <ProductCard
              product={singleProduct}
              key={singleProduct.id}
              renderAddToCart={true}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default Product;
