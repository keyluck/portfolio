import React from "react";
import styles from "../StyleModules/home.module.css";
import img from "../img/nick.jpg";
import img2 from "../img/doggo.jpeg";

export default function About() {
  return (
    <main className={styles.background}>
      <div
        className={styles.logo}
        style={{ opacity: 0.5, positon: "absolute" }}
      ></div>
      <div>
        <section className="container mx-auto pt-36">
          <section className="grid  sm:grid-col-1 md:grid-cols-2 gap-8 ">
            <img
              src={img}
              className="relative inline-block shadow-2xl rounded-lg opacity-85"
              alt="Nick"
            />

            <div
              className="relative bg-white p-4 shadow-2xl rounded-lg opacity-85"
              style={{ maxWidth: "436px" }}
            >
              <p className="text-black-800">Hi there! I'm Nick Luckey!</p>
              <p className="text-black-800 leading-relaxed">
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
