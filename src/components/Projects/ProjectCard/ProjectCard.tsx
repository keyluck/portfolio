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

type ProjectCardType = Project & {
  key: number;
};

export const ProjectCard = (props: ProjectCardType) => {
  const { title, projectType, description, linkCode, key } = props;
  return (
    <Card>
      <CardHeader
        action={
          <Tooltip title="View GitHub Repository" placement="top-end">
            <IconButton size="large" aria-label="github-repository">
              <GitHubIcon
                fontSize="large"
                onClick={() => window.open(linkCode, "_blank")}
              />
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
