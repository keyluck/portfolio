import React, { useEffect, useState } from 'react';

export const DropDownMenu = (props: any) => {
  const { styles, loading, projectData, selectedProject, setSelectedProject } = props;
  const [ data, setData ] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);

  
  if(!data) {
    return <></>
  }
  return (
  <div className={styles.dropDownMenuContainer}>
        <div className={styles.dropDownMenu}>
          <select
            disabled={loading}
            value={selectedProject.title? projectData[selectedProject.title]: projectData[0]}
            onChange={(e) => {
              setSelectedProject(projectData[e.currentTarget.value]);
              setVisible(true);
            }}
          >
            <option disabled selected>
              Select a Project
            </option>
            {projectData &&
              projectData.map((project: any, index: number) => (
                <option key={index} value={index}>
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
  )
}