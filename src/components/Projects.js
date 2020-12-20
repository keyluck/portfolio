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
      <section className="container mx-auto pt-36">
        <section className="grid  sm:grid-col-1 md:grid-cols-2 gap-8 lg:grid-col-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16  sm: overflow-ellipsis">
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

                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-500 font-bold hover:no-underline hover:text-blue-400"
                  >
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      🎮{" "}
                    </span>
                  </a>
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
