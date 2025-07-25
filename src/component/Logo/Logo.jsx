
import React from "react";
import styles from "./Logo.module.css";
import logoImg from "../../assets/qtify_logo.png";

export default function Logo() {
  return (
    <div className={styles.logo}>
<img src={logoImg} alt="QTify logo" />
      <span>tify</span>
    </div>
  );
}



