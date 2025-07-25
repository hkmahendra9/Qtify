import React, { useState, useEffect } from "react";
import styles from "./Tabs.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import axios from "axios";

const genresEndpoint = "https://qtify-backend-labs.crio.do/genres";
const songsEndpoint = "https://qtify-backend-labs.crio.do/songs";

export default function SongsSection() {
  const [songs, setSongs] = useState([]);    
  const [genres, setGenres] = useState([]);   
  const [tab, setTab] = useState("all");

  useEffect(() => {
    axios.get(songsEndpoint).then(res => setSongs(res.data));
    axios.get(genresEndpoint).then(res => setGenres(res.data.data));
  }, []);

  // Filter logic for tab/genre
  const filtered = tab === "all"
    ? songs
    : songs.filter(song => song.genre.key === tab);

  return (
    <section className={styles.section}>
      <h2>Songs</h2>
      <Tabs
        value={tab}
        onChange={(_, value) => setTab(value)}
        className={styles.tabs}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="All" value="all" />
        {genres.map((g) => (
          <Tab label={g.label} value={g.key} key={g.key} />
        ))}
      </Tabs>
      <Carousel>
        {filtered.map(song => (
          <Card
            key={song.id}
            image={song.image}
            title={song.title}
            likes={song.likes}
            type="song"
          />
        ))}
      </Carousel>
    </section>
  );
}
