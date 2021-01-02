import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.owner}>
        © 2021 Jan Füchtener. All Rights Reserved.
      </div>
      <Link className={styles.privacyLink} to="/privacy">
        <div className={styles.privacyLink}>Impressum</div>
      </Link>
    </div>
  );
}

export default Footer;
