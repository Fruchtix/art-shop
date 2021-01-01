import React from "react";
import styles from "./artistCarousel.module.css";
import Artist from "./Artist.js";

function ArtistCarousel() {
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
      <div className={styles.artistWrapper}>
        <Artist
          mr
          imgUrl="https://cdn.pixabay.com/photo/2016/04/12/10/40/portrait-1324074_1280.jpg"
        />
        <Artist
          mr
          imgUrl="https://cdn.pixabay.com/photo/2016/04/12/10/40/portrait-1324074_1280.jpg"
        />
        <Artist
          mr
          imgUrl="https://cdn.pixabay.com/photo/2016/04/12/10/40/portrait-1324074_1280.jpg"
        />
        <Artist imgUrl="https://cdn.pixabay.com/photo/2016/04/12/10/40/portrait-1324074_1280.jpg" />
      </div>
    </div>
  );
}

export default ArtistCarousel;
