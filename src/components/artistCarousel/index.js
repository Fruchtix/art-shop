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
          profileImg="https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg"
          imgUrl="https://cdn.pixabay.com/photo/2015/08/28/11/37/painting-911804_1280.jpg"
        />
        <Artist
          mr
          profileImg="https://cdn.pixabay.com/photo/2016/03/23/04/01/beautiful-1274056_1280.jpg"
          imgUrl="https://cdn.pixabay.com/photo/2020/02/04/10/49/animal-4817885_1280.jpg"
        />
        <Artist
          mr
          profileImg="https://cdn.pixabay.com/photo/2013/01/05/21/02/art-74050_1280.jpg"
          imgUrl="https://cdn.pixabay.com/photo/2015/08/28/11/37/painting-911804_1280.jpg"
        />

        <Artist
          profileImg="https://cdn.pixabay.com/photo/2015/04/07/15/10/girl-711087_1280.jpg"
          imgUrl="https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821_1280.jpg"
        />
      </div>
    </div>
  );
}

export default ArtistCarousel;
