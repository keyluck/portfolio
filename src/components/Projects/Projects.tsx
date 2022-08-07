import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import styles from "../../styles/styles.module.css";
import { Project } from "../../lib/types";
import { ProjectCard } from "./ProjectCard";
import { Box, Grid } from "@mui/material";

export const Projects = () => {
  const { box, projects } = styles;
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState<Project[]>([]);

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
      <Box className={box}>
        <Grid
          container
          className={projects}
          spacing={4}
          columns={12}
          alignItems="stretch"
        >
          {projectData &&
            projectData.map((project, index) => (
              <Grid item key={index} sm={12} md={6} lg={4} xl={3}>
                <ProjectCard {...project} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </main>
  );
};
