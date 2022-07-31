import React from "react";
import styles from "../styles/home.module.css";
import { backgroundImage } from '../lib/util';

export default function Home() {
  const logoStyle = backgroundImage();
  console.log(logoStyle)
  return (
    <main className={styles.background}>
      <div style={logoStyle} />
      <div className={styles.titleBox}>
        <section className={styles.title}>Welcome.</section>
      </div>
    </main>
  );
}
