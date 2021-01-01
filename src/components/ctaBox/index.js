import React from "react";
import styles from "./ctaBox.module.css";
import { Link } from "react-router-dom";
function CtaBox() {
  return (
    <div className={styles.container}>
      <div className={styles.maxWidth}>
        <div className={styles.textWrapper}>
          <h1 className={styles.headline}>Kunst für dich</h1>
          <h3 className={styles.subHeadline}>
            Hol dir jetzt handgemachte Kunst für dein Zuhause und unterstütze
            lokale Künstler.
          </h3>
        </div>
        <div className={styles.btnWrapper}>
          <Link to="/art">
            <button className={styles.ctaBtn}>Werke ansehen</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CtaBox;
