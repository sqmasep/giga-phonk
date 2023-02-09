import { Stack, Typography } from "@mui/material";
import React from "react";

interface TrackProps {
  name: string;
  file: unknown;
  cover: unknown;
  genre: string;
  by: never;
  createdAt: Date;
  updatedAt: Date;
}

const Track: React.FC<TrackProps> = ({ name }) => {
  return (
    <Stack>
      <Typography>{name}</Typography>
    </Stack>
  );
};

export default Track;
