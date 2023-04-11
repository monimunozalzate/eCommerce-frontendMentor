import React from "react";
import styles from "./Cart.module.css";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
// import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.title}>Cart</h2>
      <section>
        <img src="" alt="" />
        <div>
          <div>
            <p></p>
            <p></p>
          </div>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </div>
      </section>
    </div>
  );
};

export default Cart;
