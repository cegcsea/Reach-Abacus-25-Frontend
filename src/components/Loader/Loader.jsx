import React from "react";
import Lottie from "lottie-react";
import rippleAnimation from "../../assets/Loader/Ripple loading animation.json";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader_wrapper} role="status" aria-live="polite">
      <div className={styles.text_block}>
        <div className={styles.title}>REACH &apos;26</div>
        <div className={styles.subtitle}>Loading...</div>
      </div>
      <div className={styles.lottie_container}>
        <Lottie
          animationData={rippleAnimation}
          loop={true}
          autoplay={true}
          style={{ width: 1000, height: 1000 }}
        />
      </div>
    </div>
  );
}

export default Loader;
