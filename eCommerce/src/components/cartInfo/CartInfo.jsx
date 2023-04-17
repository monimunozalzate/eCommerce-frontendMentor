import React from "react";
import styles from "../cart/Cart.module.css";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { product } from "../../db/product";

const CartInfo = ({ addingToCart, deleteProduct}) => {
  
  return (
    < >
      {addingToCart.map((data) => {
        return (
          <section key={data.quantity} className={styles.productContainer}>
            <img src={data.image.src} alt={data.title} className={styles.img} />
            <div className={styles.info}>
              <div className={styles.dataContainer}>
                <h1 className={styles.name}>{data.title}</h1>
                <p className={styles.price}>
                  {data.price} x {data.quantity} <span>${data.totalPrice}</span>{" "}
                </p>
              </div>
              <IconButton type="button" style={{ padding: "0" }} 
              onClick={()=>deleteProduct(product)}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default CartInfo;
