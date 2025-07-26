import React, { useState, useEffect } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Button from "../Button/Button";
import axios from "axios";

export default function Section({
  title,
  fetchUrl,
  cardType = "album",
  showCollapse = true, // pass false for Songs
}) {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    axios.get(fetchUrl).then(res => setData(res.data));
  }, [fetchUrl]);

  return (
    <section className={styles.section}>
  <div className={styles.sectionContent}>
    <div className={styles.header}>
      <h2>{title}</h2>
      {showCollapse && (
        <Button onClick={() => setCollapsed(c => !c)}>
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      )}
    </div>
    {showCollapse && collapsed ? (
      <Carousel>
        {data.map(album => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            follows={album.follows}
            type={cardType}
          />
        ))}
      </Carousel>
    ) : (
      <div className={styles.grid}>
        {data.map(album => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            follows={album.follows}
            type={cardType}
          />
        ))}
      </div>
    )}
  </div>
</section>

  );
}
