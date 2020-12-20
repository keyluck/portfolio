import React from "react";
import styles from "../StyleModules/home.module.css";
import img from "../img/nick.png";

export default function About() {
  return (
    <main className={styles.background}>
      <div className="pt-36 md:container  mx-auto">
        <img src={img} className="inline-block shadow-2xl " alt="Nick" />
        <section className="p-2 align-top h-auto bg-gray-100  shadow-2xl inline-block max-w-md sm:ml-0 sm:pt-24 lg:ml-20 mt-0">
          <div className="">
            <p className="text-black-800">Hi there! I'm Nick!</p>
            <p className="text-black-800 leading-relaxed">
              I'm a Software Developer, USMC Veteran, and technology enthusiast
              from San Diego, California. I enjoy approaching challenging
              problems with simple logical steps. When I'm not learning new
              languages and tools, I'm hiking, lifting weights and playing video
              games.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
