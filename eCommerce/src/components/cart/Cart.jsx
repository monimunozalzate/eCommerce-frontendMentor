import React from "react";
import styles from "./Cart.module.css";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = ({ addingToCart }) => {
  console.log(addingToCart);
  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.title}>Cart</h2>
      {addingToCart.map((data) => {
        return (
          <section key={data.title} className={styles.productContainer}>
            <img src={data.image.src} alt={data.title} className={styles.img} />
            <div className={styles.info}>
              <div className={styles.dataContainer}>
                <h1 className={styles.name}>{data.title}</h1>
                <p className={styles.price}>
                  {data.price} x {data.quantity} <span>${data.totalPrice}</span>{" "}
                </p>
              </div>
              <IconButton style={{ padding: "0" }}>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          </section>
        );
      })}
      <section className={styles.sectioBtn}>
        <button className={styles.checkOut}>Checkout</button>
      </section>
    </div>
  );
};

export default Cart;
