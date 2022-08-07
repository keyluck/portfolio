import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Project } from "../../../lib/types";
import styles from "../../../styles/styles.module.css";

type ProjectCardType = Project;

export const ProjectCard = (props: ProjectCardType) => {
  const { title, projectType, description, linkCode } = props;
  const { projectCard } = styles;

  return (
    <Card className={projectCard}>
      <CardHeader
        action={
          <Tooltip title="View GitHub Repository" placement="top-end">
            <IconButton
              size="large"
              aria-label="github-repository"
              onClick={() => window.open(linkCode, "_blank")}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        }
        title={title}
        subheader={`Project Type: ${projectType}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
