import React from "react";
import styles from "../StyleModules/home.module.css";

//<section className="relative flex justify-center pt-12 lg:pt-12 px-8">
//<h1 className={styles.title}>Nick Luckey</h1>
//</section>

export default function Home() {
  return (
    <main className={styles.background}>
      <div className={styles.logo} />
      <div className={styles.titleBox}>
        <section className={styles.title}>Welcome.</section>
      </div>
    </main>
  );
}
