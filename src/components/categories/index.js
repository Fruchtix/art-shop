import React from "react";
import styles from "./categories.module.css";

function Categories() {
  return (
    <div className={styles.container}>
      <div className={styles.headlineWrapper}>
        <h1 className={styles.headlineH1}>Lerne Künstler kennen</h1>
        <h2 className={styles.subHeadline}>
          tellus in hac habitasse platea dictumst vestibulum rhoncus est
          pellentesque elit ullamcorper dignissim cras tincidunt lobortis
          <br />
          feugiat vivamus at augue eget arcu dictum varius duis at consectetur
          lorem donec
        </h2>
      </div>
    </div>
  );
}

export default Categories;
