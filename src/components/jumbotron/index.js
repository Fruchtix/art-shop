import React from "react";
import styles from "./jumbotron.module.css";

function Jumbotron({ reverse }) {
  return (
    <div className={`${styles.container} ${reverse && styles.reverse}`}>
      <div className={styles.textWrapper}>
        <h1 className={styles.headline}>Unterstütze lokale Künstler</h1>
        <h3 className={styles.subHeadline}>
          est sit amet facilisis magna etiam tempor orci eu lobortis elementum
          nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis
          enim ut tellus elementum sagittis vitae et leo duis ut
        </h3>
        <button className={styles.ctaBtn}>Kunst ansehen</button>
      </div>
      <div className={styles.imageWrapper}>
        {/* <img
          alt="XXX"
          className={styles.image}
          src="https://cdn03.plentymarkets.com/2f2pb4p75jib/item/images/93388/full/e95791-0.jpg"
        /> */}
        <div className={styles.image}></div>
      </div>
    </div>
  );
}

export default Jumbotron;
