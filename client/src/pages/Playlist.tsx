import { playlists } from "@/lib/query/playlists";
import usePlayingMusicStore from "@/store/playing";
import { PlayArrow } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const MusicPreview: React.FC<{
  songUrl: string;
  coverUrl: string;
  name: string;
  artist: string;
}> = ({ songUrl, coverUrl, name, artist }) => {
  const { setSrc, setImage, setTitle } = usePlayingMusicStore();
  const handlePlay = () => {
    setSrc(songUrl);
    setImage(coverUrl);
    setTitle(name);
  };

  return (
    <Card sx={{ p: 2 }}>
      <CardMedia src={coverUrl} />
      <CardContent>
        <Stack
          direction='row'
          alignItems='center'
          width='100%'
          justifyContent='space-between'
        >
          <Stack gap={1}>
            <Typography variant='h5' component='h2'>
              {name}
            </Typography>
            <Link component={RouterLink} to={`/artists/${artist}`}>
              <Typography variant='caption' color='gray' component='h2'>
                {artist}
              </Typography>
            </Link>
          </Stack>
          <IconButton size='large' onClick={handlePlay}>
            <PlayArrow />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

const MotionStack = motion(Stack);

const variants: Record<"children" | "parent", Variants> = {
  children: {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
  parent: {
    hidden: {
      transition: {
        when: "beforeChildren",
      },
    },
    visible: {
      transition: {
        when: "afterChildren",
        staggerChildren: 0.15,
      },
    },
  },
};

const Playlist: React.FC = () => {
  const { playlistId = "" } = useParams();
  const { data } = useQuery(
    playlists.keys.byId(playlistId),
    playlists.queries.byId(playlistId)
  );
  return (
    <Container>
      <Typography variant='h2' component='h1' fontWeight={700}>
        Playlist {playlistId}
      </Typography>
      {data && (
        <MotionStack
          variants={variants.parent}
          initial='hidden'
          animate='visible'
          spacing={1}
          mt={4}
        >
          {data.data.map(({ name, coverUrl, fileUrl, artist }) => (
            <motion.div variants={variants.children} key={name}>
              <MusicPreview
                coverUrl={`/${coverUrl}`}
                name={name}
                songUrl={fileUrl}
                artist={artist}
              />
            </motion.div>
          ))}
        </MotionStack>
      )}
    </Container>
  );
};

export default Playlist;
