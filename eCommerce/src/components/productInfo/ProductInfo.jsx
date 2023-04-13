import { IconButton } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "./ProductInfo.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const ProductInfo = () => {
  const [isAdding, setisAdding] = useState(0);
  const [addingToCart, setaddingToCart] = useState(false);

  const haddleAdd = () => {
    setisAdding(isAdding + 1);
  };
  const handleSubstract = () => {
    setisAdding(isAdding - 1);
    if (isAdding <= 0) {
      setisAdding(isAdding);
    }
  };
  const price = 125;
  const discount = 50;
  const pastPrice = price * 2;

  return (
    <div className={styles.productInfo}>
      <h1 className={styles.company}>SNEAKER COMPANY</h1>
      <h2 className={styles.edition}>
        Fall Limited Edition
        <br /> Sneakers{" "}
      </h2>
      <p className={styles.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <section className={styles.numbers}>
        <div className={styles.priceContainer}>
          <h3 className={styles.price}>${price}.00</h3>
          <p className={styles.discount}>{discount}%</p>
        </div>
        <p className={styles.pastPrice}>${pastPrice}.00</p>
      </section>
      <section className={styles.buttonSection}>
        <div className={styles.quantity}>
          <IconButton onClick={handleSubstract} className={styles.btn}>
            <RemoveIcon />
          </IconButton>
          <p>{isAdding}</p>
          <IconButton onClick={haddleAdd} className={styles.btn}>
            <AddIcon />
          </IconButton>
        </div>
        <button className={styles.addCart}>
          <ShoppingCartOutlinedIcon />
          Add to cart
        </button>
      </section>
    </div>
  );
};

export default ProductInfo;
