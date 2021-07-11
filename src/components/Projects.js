import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

import styles from "../StyleModules/home.module.css";
import { backgroundImage } from '../lib/util';
export default function Projects() {
  const logoStyle = {...backgroundImage(), 'opacity':'0.5'};
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [visible, setVisible] = useState(false);

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
    setLoading(false);
  }, []);

  return (
    <main className={styles.background}>
      <div style={logoStyle} />

      {/* Container for Drop Down menu for mobile devices*/}
      <div className={styles.dropDownMenuContainer}>
        <div className={styles.dropDownMenu}>
          <select
            disabled={loading}
            value={projectData[selectedProject]}
            onChange={(e) => {
              setSelectedProject(projectData[e.currentTarget.value]);
              setVisible(true);
            }}
          >
            <option disabled selected>
              Select a Project
            </option>
            {projectData &&
              projectData.map((project, index) => (
                <option key={project} value={index}>
                  {project.title}
                </option>
              ))}
          </select>
        </div>

        <div className={styles.selectedProjectContainer}>
          <div
            style={{
              visibility: visible === false ? "hidden" : "visible",
            }}
          >
            <article className="relative rounded-lg shadow-xl bg-white p-2 lg:p-4 opacity-85">
              <h3 className="text-gray-800 text-md font-bold ">
                <a
                  href={selectedProject.link}
                  alt={selectedProject.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-bold hover:no-underline hover:text-blue-400"
                >
                  {selectedProject.title}
                </a>
              </h3>

              <div className={styles.projectsInfo}>
                <span className="pr-4 ">
                  <strong className="font-bold">Type</strong>:{" "}
                  {selectedProject.projectType}
                </span>
                <span className="p-4">
                  <strong className="font-bold">Location</strong>:{" "}
                  {selectedProject.place}
                </span>
                <br />
                <p className="pt-3 text-md text-gray-700 leading-snug lg:pt-2">
                  {selectedProject.description}
                </p>
                <a
                  href={selectedProject.linkCode}
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
          </div>
        </div>
      </div>
      {/* End of container for drop down menu */}

      {/* Begin of container for project grid for larger screens */}
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
