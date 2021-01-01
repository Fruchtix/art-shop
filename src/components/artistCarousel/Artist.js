import React from "react";
import styles from "./artist.module.css";

function Artist({ imgUrl, mr }) {
  return (
    <div className={`${styles.container} ${mr && styles.mr}`}>
      <img className={styles.image} src={imgUrl} alt="XXX" />
      <div className={styles.name}>Antje Füchtener</div>
      <div className={styles.desc}>Acryl Künstlerin</div>
    </div>
  );
}

export default Artist;
