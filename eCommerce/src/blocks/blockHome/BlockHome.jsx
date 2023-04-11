import React from "react";
import BlockHeader from "../blockHeader/BlockHeader";
import styles from './BlockHome.module.css';

const BlockHome = () => {
  return (
    <div className={styles.home}>
      <BlockHeader />
    </div >
  );
};

export default BlockHome;
