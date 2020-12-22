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
            projectType,
            description,
            link,
            linkCode,

        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return <main>{projectData.title}</main>;
}
