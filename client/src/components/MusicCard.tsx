import usePlayingMusicStore from "@/store/playing";
import { PlayArrow } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

interface CardProps {
  title: string;
  image: string;
  artist?: string;
  duration?: number;
  songUrl: string;
}

const MusicCard: React.FC<CardProps> = ({
  image,
  title,
  duration,
  artist,
  songUrl,
}) => {
  const { setSrc, setImage, setTitle } = usePlayingMusicStore();
  const handlePlay = () => {
    setSrc(songUrl);
    setImage(image);
    setTitle(title);
  };

  return (
    <Card>
      <CardContent>
        <Stack alignItems='start'>
          <CardMedia component='img' height='194' src={image} />
          <Typography mt={2} variant='h5' component='p'>
            {title}
          </Typography>
          <Typography variant='subtitle1' color='gray'>
            {artist}
          </Typography>
          <Typography>{duration}</Typography>
          <IconButton onClick={handlePlay}>
            <PlayArrow />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MusicCard;
