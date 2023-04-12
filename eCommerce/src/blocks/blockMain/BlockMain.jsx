import React from "react";
import ImagesDisplay from "../../components/imagesDisplay/ImagesDisplay";
import ProductInfo from "../../components/productInfo/ProductInfo";
import styles from './BlockMain.module.css'

const BlockMain = () => {
  return (
    <div className={styles.mainContainer}>
      <ImagesDisplay className={styles.left}/>
      <ProductInfo className={styles.right}/>
    </div>
  );
};

export default BlockMain;
