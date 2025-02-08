import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.spinner_box}>
        <div className={styles.leo_border_1}>
          <div className={styles.leo_core_1}></div>
        </div>
        <div className={styles.leo_border_2}>
          <div className={styles.leo_core_2}></div>
        </div>
      </div>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
