import React from "react";
import styles from "../StyleModules/home.module.css";
import img from "../img/nick.jpg";
import { backgroundImage } from '../lib/util';

export default function About() {
  const logoStyle = {...backgroundImage(), 'opacity': '0.5'};


  return (
    <main className={styles.background}>
      <div style={logoStyle} />
      <div>
        <section className="container mx-auto pt-36">
          <section className="grid  sm:grid-col-1 md:grid-cols-2 gap-8 ">
            <img src={img} className={styles.aboutPicture} alt="Nick" />

            <div className="relative bg-white p-4 shadow-2xl rounded-lg opacity-85">
              <p className={styles.aboutText}>Hi there! I'm Nick Luckey!</p>
              <p className={styles.aboutText}>
                I'm a Software Developer, USMC Veteran, and technology
                enthusiast from San Diego, California. I enjoy breaking down
                challenging problems into simple logical steps. When I'm not
                learning new languages and tools, I'm hiking with my dogs,
                lifting weights and playing video games.
              </p>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
