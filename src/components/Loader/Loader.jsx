import React from "react";
import Hyperspeed, { hyperspeedPresets } from "../HyperSpeed/HyperSpeed.jsx";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader_wrapper} role="status" aria-live="polite">
      {/* Hyperspeed background */}
      <div className={styles.hyperspeed_bg}>
        <Hyperspeed effectOptions={hyperspeedPresets.two} />
      </div>

      {/* Overlay text - positioned at top */}
      <div className={styles.text_block}>
        <div className={styles.title}>ABACUS &apos;26</div>
        <div className={styles.subtitle}>Initializing systems…</div>
      </div>
    </div>
  );
}

export default Loader;