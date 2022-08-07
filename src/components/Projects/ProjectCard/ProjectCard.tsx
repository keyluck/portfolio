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
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { linkSync } from "fs";
import { CardIcons } from "./";

type ProjectCardType = Project;

export const ProjectCard = (props: ProjectCardType) => {
  const { title, projectType, description, link, linkCode } = props;
  const { projectCard } = styles;

  return (
    <Card className={projectCard}>
      <CardHeader
        action={<CardIcons {...{ link, linkCode }} />}
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
