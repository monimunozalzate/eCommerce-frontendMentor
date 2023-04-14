import React from "react";
import ImagesDisplay from "../../components/imagesDisplay/ImagesDisplay";
import ProductInfo from "../../components/productInfo/ProductInfo";
import styles from './BlockMain.module.css'


const BlockMain = ({addingToCart, setaddingToCart, imagesArray}) => {
  
  return (
    <div className={styles.mainContainer} >
      <ImagesDisplay className={styles.left} imagesArray={imagesArray}/>
      <ProductInfo className={styles.right} imagesArray={imagesArray} setaddingToCart={setaddingToCart} addingToCart={addingToCart}/>
    </div>
  );
};

export default BlockMain;


