import React from "react";
import styles from "./hero.module.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Handgemachte Kunst online kaufen</h1>
      <h2 className={styles.subHeadline}>
        dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum
        suspendisse ultrices gravida dictum fusce ut placerat orci nulla
        pellentesque dignissim enim sit amet
      </h2>
      <Link to="/art">
        <button className={styles.ctaBtn}>Werke ansehen</button>
      </Link>
    </div>
  );
}

export default Hero;
