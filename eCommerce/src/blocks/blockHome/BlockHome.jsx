import React from "react";
import BlockHeader from "../blockHeader/BlockHeader";
import styles from './BlockHome.module.css';
import BlockMain from "../blockMain/BlockMain";

const BlockHome = () => {
  return (
    <div className={styles.home}>
      <BlockHeader />
      <BlockMain/>
    </div >
  );
};

export default BlockHome;
