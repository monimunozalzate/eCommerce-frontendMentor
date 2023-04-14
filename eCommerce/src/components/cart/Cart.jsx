import React, { useContext } from "react";
import styles from "./Cart.module.css";
import CartInfo from "../cartInfo/CartInfo";
import { QuantityContext } from "../../context/Quantity.context";

const Cart = ({ addingToCart }) => {
  const { isAdding, setisAdding } = useContext(QuantityContext);

  // const deleteProduct = (product) => {
  //   setisAdding(addingToCart.filter(item => item.product !== product))
  //   console.log()
  // };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.title}>Cart</h2>
      {isAdding === 0 ? <p>vacio</p> : <CartInfo addingToCart={addingToCart} deleteProduct={deleteProduct}/>}
      <section className={styles.sectioBtn}>
        <button className={styles.checkOut}>Checkout</button>
      </section>
    </div>
  );
};

export default Cart;
