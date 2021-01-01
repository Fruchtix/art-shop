import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import styles from "./topic.module.css";

function Topic({ imgUrl, topic, mr, subHeadline }) {
  return (
    <div className={`${styles.container} ${mr && styles.mr}`}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imgUrl} alt="XXX" />
      </div>
      <div className={styles.headlineWrapper}>
        <h3 className={styles.headline}>{topic}</h3>
        <HiOutlineChevronRight color={"rgb(99, 99, 99)"} size={"18px"} />
      </div>
      <div className={styles.subHeadline}>{subHeadline}</div>
    </div>
  );
}

export default Topic;
