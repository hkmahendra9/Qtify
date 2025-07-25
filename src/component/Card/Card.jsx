import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

/**
 * type: 'album' | 'song'
 * For albums: show follows; for songs: show likes, etc.
 */
export default function Card({ 
  image, 
  title, 
  follows, 
  likes, 
  type = 'album' 
}) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.chipWrapper}>
        {type === 'album' ? (
          <Chip label={`${follows} Follows`} className={styles.chip}/>
        ) : (
          <Chip label={`${likes} Likes`} className={styles.chip}/>
        )}
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
