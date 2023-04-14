import React, {useState} from "react";
import BlockHeader from "../blockHeader/BlockHeader";
import styles from './BlockHome.module.css';
import BlockMain from "../blockMain/BlockMain";
import {imagesArray} from "../../db/images";

const BlockHome = () => {
  const [addingToCart, setaddingToCart] = useState([]);

  return (
    <div className={styles.home}>
      <BlockHeader addingToCart={addingToCart} imagesArray={imagesArray}/>
      <BlockMain setaddingToCart={setaddingToCart} addingToCart={addingToCart} imagesArray={imagesArray}/>
    </div >
  );
};

export default BlockHome;
