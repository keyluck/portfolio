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
      <section className="container mx-auto pt-36 object-contain">
        <section className="grid  sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-6 opacity-85 ">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 ">
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
                <div className="text-gray-500 text-xs ">
                  <span className="pr-4">
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <span>
                    <strong className="font-bold">Location</strong>:{" "}
                    {project.place}
                  </span>
                  <br /> <br />
                  <p className=" hidden text-md text-gray-700 leading-relaxed sm:contents">
                    {project.description}
                  </p>
                  <br />
                  <br />
                  <a
                    href={project.linkCode}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-500 font-bold hover:no-underline hover:text-blue-400"
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
    </main>
  );
}
