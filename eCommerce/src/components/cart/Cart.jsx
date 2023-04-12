import React from "react";
import styles from "./Cart.module.css";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.title}>Cart</h2>
      <section>
        <img src="" alt="" />
        <div>
          <div>
            <p>Nombre</p>
            <p>Precio</p>
          </div>
          <IconButton>
            <DeleteOutlineIcon/>
          </IconButton>
        </div>
      </section>
    </div>
  );
};

export default Cart;
