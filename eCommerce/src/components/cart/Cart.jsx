import React, { useContext } from "react";
import styles from "./Cart.module.css";
import CartInfo from "../cartInfo/CartInfo";
import { QuantityContext } from "../../context/Quantity.context";

const Cart = ({ addingToCart, setaddingToCart, handleToggleCart }) => {
  const { isAdding, setisAdding } = useContext(QuantityContext);

  const deleteProduct = (product) => {
    let newArray = addingToCart.filter((e) => e.quatity !== product.quatity);
    setaddingToCart(newArray);
    // console.log( product);
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.title}>Cart</h2>
      {isAdding === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <CartInfo addingToCart={addingToCart} deleteProduct={deleteProduct} />
      )}
      <section className={styles.sectioBtn}>
        <button className={styles.checkOut} onClick={handleToggleCart}>Checkout</button>
      </section>
    </div>
  );
};

export default Cart;
