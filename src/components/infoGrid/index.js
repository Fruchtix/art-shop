import React from "react";
import styles from "./infoGrid.module.css";
import Topic from "./Topic";

function InfoGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.headlineWrapper}>
        <h1 className={styles.headlineH1}>Finde orginale Kunst</h1>
        <h2 className={styles.subHeadline}>
          tellus in hac habitasse platea dictumst vestibulum rhoncus est
          pellentesque elit ullamcorper dignissim cras tincidunt lobortis
          <br />
          feugiat vivamus at augue eget arcu dictum varius duis at consectetur
          lorem donec
        </h2>
      </div>
      <div className={styles.categoryWrapper}>
        <Topic
          mr
          topic="Kunst"
          subHeadline="dui faucibus in ornare quam viverra orci sagittis eu volutpat."
          imgUrl="https://lh3.googleusercontent.com/proxy/8hlzLxt9d_qVd1cNAm5zmSrhT227p5yU74tGQ8KSmrRBT92ntwupVnVMGrbzRc47ccQfJ24CveM_3tyDQEQR_D1Zt5YK0Ktssbz4lXSNU4aonJv0oryfaKFJxYS63JsJWIIy"
        />
        <Topic
          mr
          topic="Kunst"
          subHeadline="dui faucibus in ornare quam viverra orci sagittis eu volutpat."
          imgUrl="https://lh3.googleusercontent.com/proxy/8hlzLxt9d_qVd1cNAm5zmSrhT227p5yU74tGQ8KSmrRBT92ntwupVnVMGrbzRc47ccQfJ24CveM_3tyDQEQR_D1Zt5YK0Ktssbz4lXSNU4aonJv0oryfaKFJxYS63JsJWIIy"
        />
        <Topic
          topic="Kunst"
          subHeadline="dui faucibus in ornare quam viverra orci sagittis eu volutpat."
          imgUrl="https://lh3.googleusercontent.com/proxy/8hlzLxt9d_qVd1cNAm5zmSrhT227p5yU74tGQ8KSmrRBT92ntwupVnVMGrbzRc47ccQfJ24CveM_3tyDQEQR_D1Zt5YK0Ktssbz4lXSNU4aonJv0oryfaKFJxYS63JsJWIIy"
        />
      </div>
    </div>
  );
}

export default InfoGrid;
