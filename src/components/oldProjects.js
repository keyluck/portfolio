import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sanityClient from "../client.js";
import styles from "../StyleModules/home.module.css";

export default function Projects() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            place,
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
      <section className={styles.title}></section>

      <Container>
        <Row>
          <Col xs={6} md={4}>
            {projectData &&
              projectData.map((project, index) => (
                <article className="relative rounded-lg shadow-xl bg-white p-16  sm: overflow-ellipsis">
                  <h3 className="text-gray-800 text-3xl font-bold mb-2 hover: text-red-700">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4">
                    <span>
                      <strong className="font-bold">Finished on</strong>:{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Location</strong>:{" "}
                      {project.place}
                    </span>
                    <span>
                      <strong className="font-bold">Type</strong>:{" "}
                      {project.projectType}
                    </span>
                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-red-500 font-bold hover:underline hover:text-red-400"
                    >
                      View The Project{" "}
                      <span role="img" aria-label="right pointer">
                        👉
                      </span>
                    </a>
                    <a
                      href={project.linkCode}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-red-500 font-bold hover:underline hover:text-red-400"
                    >
                      View The Source Code{" "}
                      <span role="img" aria-label="laptop">
                        💻
                      </span>
                    </a>
                  </div>
                </article>
              ))}
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>
      </Container>
    </main>
  );
}
