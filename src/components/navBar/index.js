import React from "react";
import styles from "./navBar.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import logo from "../../assets/svgs/logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPannel}>
        <div className={styles.logoWrapper}>
          <Link to="/">
            <img
              src={logo}
              alt="XXX"
              className={`${styles.logo} ${styles.link}`}
            />
          </Link>
        </div>
        <Link className={styles.resetRouterLink} to="/art">
          <div className={`${styles.shopLink} ${styles.link}`}>Shop</div>
        </Link>
      </div>
      <div>
        <AiOutlineUser
          className={`${styles.marginRight} ${styles.link}`}
          color={"#000"}
          size={27}
        />
        <AiOutlineShopping className={styles.link} color={"#000"} size={27} />
      </div>
    </div>
  );
}

export default NavBar;
