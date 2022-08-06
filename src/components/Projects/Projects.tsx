import React, { useState, useEffect } from "react";
import sanityClient from "../../client";

import styles from "../../styles/home.module.css";
import { backgroundImage } from "../../lib/util";
import { Project } from "../../lib/types";
import { DropDownMenu } from "../DropDownMenu/DropDownMenu";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const logoStyle: React.CSSProperties = {
    ...backgroundImage(),
    opacity: "0.5",
  };
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project>();

  const selectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const dropDownMenuProps = {
    styles,
    loading,
    projectData,
    selectedProject,
    setSelectedProject: selectProject,
  };

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
  if (loading || !projectData) {
    return <></>;
  }

  return (
    <main className={styles.background}>
      <div style={logoStyle} />

      {/* Container for Drop Down menu for mobile devices*/}
      <DropDownMenu {...dropDownMenuProps} />
      {/* End of container for drop down menu */}

      {/* Begin of container for project grid for larger screens */}
      <div className={styles.projects}>
        <section className="container mx-auto ">
          <section className={styles.projectsGrid}>
            {projectData &&
              projectData.map((project, index) => (
                <ProjectCard {...{ ...project, key: index }} />
              ))}
          </section>
        </section>
      </div>
    </main>
  );
};
