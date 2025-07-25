import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar />
      <Button>Give Feedback</Button>
    </nav>
  );
}
