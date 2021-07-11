import React from "react";
import styles from "../StyleModules/home.module.css";
import { backgroundImage } from '../lib/util';


export default function Home() {
  const logoStyle = backgroundImage();
  return (
    <main className={styles.background}>
      <div style={logoStyle} />
      <div className={styles.titleBox}>
        <section className={styles.title}>Welcome.</section>
      </div>
    </main>
  );
}
