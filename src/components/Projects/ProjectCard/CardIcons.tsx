import React from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Project } from "../../../lib/types";

export const CardIcons = (props: Partial<Project>) => {
  const { link, linkCode } = props;

  return (
    <Box>
      {link && (
        <Tooltip title="View Demo" placement="top-end">
          <IconButton
            size="large"
            aria-label="open-in-new-window"
            onClick={() => window.open(link, "_blank")}
          >
            <OpenInNewIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      )}

      <Tooltip title="View GitHub Repository" placement="top-end">
        <IconButton
          size="large"
          aria-label="github-repository"
          onClick={() => window.open(linkCode, "_blank")}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
