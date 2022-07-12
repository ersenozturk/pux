import React from "react";
import styles from "./Main.module.css";
import MainTopUp from "../mainTopUp/MainTopUp";
import MainTopDown from "../mainTopDown/MainTopDown";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <MainTopUp />
      <MainTopDown />
      {/* <div className={styles.main}>
        <div className={styles.mainLeft}>adasd</div>
        <div className={styles.mainRight}>asdsadas</div>
      </div> */}
    </div>
  );
};

export default Main;
