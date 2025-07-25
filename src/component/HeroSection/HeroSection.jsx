import React from "react";
import styles from "./HeroSection.module.css";

import headphones from "../../../src/assets/headphones.png"


// export default function HeroSection() {
//   return (
//     <section className={styles.hero}>
//       <div>
//         <h1>100 Thousand Songs, ad-free</h1>
//         <h2>Over thousands podcast episodes</h2>
//       </div>
//       <img src={headphones} alt="Headphones" />
//     </section>
//   );
// }


export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h2>Over thousands podcast episodes</h2>
        </div>
        <img src={headphones} alt="Headphones" />
      </div>
    </section>
  );
}

