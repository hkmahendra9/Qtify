import React, { useState, useEffect } from "react";
import styles from "./SongsSection.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";

import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

const GENRES_API = "https://qtify-backend-labs.crio.do/genres";
const SONGS_API = "https://qtify-backend-labs.crio.do/songs";

export default function SongsSection() {
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    // Fetch genres for tabs
    axios.get(GENRES_API).then((res) => {
      setGenres(res.data.data || []); // genres in "data" property
    });

    // Fetch songs
    axios.get(SONGS_API).then((res) => {
      setSongs(res.data || []);
    });
  }, []);

  // Filter songs by selected genre
  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  return (
    <section className={styles.songsSection}>
      <h2 className={styles.title}>Songs</h2>
      <Tabs
        value={selectedGenre}
        onChange={handleTabChange}
        className={styles.tabs}
        textColor="primary"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons={false}
        aria-label="song genre tabs"
      >
        <Tab label="All" value="all" />
        {genres.map((genre) => (
          <Tab key={genre.key} label={genre.label} value={genre.key} />
        ))}
      </Tabs>

      <Carousel>
        {filteredSongs.map((song) => (
          <Card
            key={song.id}
            image={song.image}
            title={song.title}
            likes={song.likes}
            type="song" // tells Card to show Likes chip
          />
        ))}
      </Carousel>
    </section>
  );
}
