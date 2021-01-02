import React from "react";
import styles from "./artist.module.css";

function Artist({ imgUrl, mr, profileImg }) {
  return (
    <div className={`${styles.container} ${mr && styles.mr}`}>
      <img className={styles.image} src={imgUrl} alt="XXX" />
      <div className={styles.artistInfo}>
        <img className={styles.profileImg} src={profileImg} alt="XXX" />
        <div>
          <div className={styles.name}>Antje Füchtener</div>
          <div className={styles.desc}>Köln</div>
        </div>
      </div>
    </div>
  );
}

export default Artist;
