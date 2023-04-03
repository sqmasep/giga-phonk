import { playlists } from "@/lib/query/playlists";
import usePlayingMusicStore from "@/store/playing";
import { PlayArrow } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

const MusicPreview: React.FC<{
  songUrl: string;
  coverUrl: string;
  name: string;
}> = ({ songUrl, coverUrl, name }) => {
  const { setSrc, setImage, setTitle } = usePlayingMusicStore();
  const handlePlay = () => {
    setSrc(songUrl);
    setImage(coverUrl);
    setTitle(name);
  };

  return (
    <Card>
      <CardMedia src={coverUrl} />
      <CardContent>
        <Stack
          direction='row'
          alignItems='center'
          width='100%'
          justifyContent='space-between'
        >
          <Typography>{name}</Typography>
          <IconButton onClick={handlePlay}>
            <PlayArrow />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

const Playlist: React.FC = () => {
  const { playlistId = "" } = useParams();
  const { data } = useQuery(
    playlists.keys.byId(playlistId),
    playlists.queries.byId(playlistId)
  );

  return (
    <Container>
      <Stack spacing={1}>
        {data?.data.map(({ name, coverUrl, fileUrl }) => (
          <MusicPreview coverUrl={coverUrl} name={name} songUrl={fileUrl} />
        ))}
      </Stack>
    </Container>
  );
};

export default Playlist;
