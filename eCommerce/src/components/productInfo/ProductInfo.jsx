import { IconButton } from "@mui/material";
import React, { useState, useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "./ProductInfo.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {product} from '../../db/product'
import { QuantityContext } from '../../context/Quantity.context';

const ProductInfo = ({ imagesArray, setaddingToCart, addingToCart }) => {
  const {isAdding, setisAdding }= useContext(QuantityContext);
//--------------------------------
const handleAddingToCart =()=>{
  setaddingToCart([
    ...addingToCart, {
    image: imagesArray[1],
    title: product.title,
    price: product.price/2,
    quantity: isAdding,
    totalPrice: product.price*isAdding,
  }])
  // console.log(addingToCart)
}

  // -------------------------------
  const haddleAdd = () => {
    setisAdding(isAdding + 1);
  };
  const handleSubstract = () => {
    setisAdding(isAdding - 1);
    if (isAdding <= 0) {
      setisAdding(isAdding);
    }
  };

  return (
    <div className={styles.productInfo}>
      <h1 className={styles.company}>{product.company}</h1>
      <h2 className={styles.edition}>
        {product.title}
      </h2>
      <p className={styles.description}>
       {product.description}
      </p>
      <section className={styles.numbers}>
        <div className={styles.priceContainer}>
          <h3 className={styles.price}>${product.price/2}.00</h3>
          <p className={styles.discount}>{product.discount}%</p>
        </div>
        <p className={styles.pastPrice}>${product.price}.00</p>
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
        <button
          type="submit"
          className={styles.addCart}
          onClick={handleAddingToCart}
        >
          <ShoppingCartOutlinedIcon />
          Add to cart
        </button>
      </section>
    </div>
  );
};

export default ProductInfo;
