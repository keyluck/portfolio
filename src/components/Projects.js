import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import styles from "../StyleModules/home.module.css";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            place,
            projectType,
            technology,
            description,
            project,
            link,
            linkCode,
            tags

        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className={styles.background}>
      <div
        className={styles.logo}
        style={{ opacity: 0.5, position: "absolute" }}
      ></div>
      <div className={styles.projects}>
        <section className="container mx-auto ">
          <section className={styles.projectsGrid}>
            {projectData &&
              projectData.map((project, index) => (
                <article className="relative rounded-lg shadow-xl bg-white p-2 lg:p-4 opacity-85 ">
                  <h3 className="text-gray-800 text-sm font-bold md:text-3xl ">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-bold hover:no-underline hover:text-blue-400"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className={styles.projectsInfo}>
                    <span className="pr-4 ">
                      <strong className="font-bold">Type</strong>:{" "}
                      {project.projectType}
                    </span>
                    <span>
                      <strong className="font-bold">Location</strong>:{" "}
                      {project.place}
                    </span>
                    <br />
                    <p className=" text-md text-gray-700 leading-snug lg:pt-2">
                      {project.description}
                    </p>
                    <br />

                    <a
                      href={project.linkCode}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-blue-500  font-bold hover:no-underline hover:text-blue-400"
                    >
                      View The Source Code{" "}
                      <span role="img" aria-label="laptop">
                        💻
                      </span>
                    </a>
                  </div>
                </article>
              ))}
          </section>
        </section>
      </div>
    </main>
  );
}
