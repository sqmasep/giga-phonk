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
import { AnimatePresence, motion, Variants } from "framer-motion";
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
    <Card sx={{ p: 2 }}>
      <CardMedia src={coverUrl} />
      <CardContent>
        <Stack
          direction='row'
          alignItems='center'
          width='100%'
          justifyContent='space-between'
        >
          <Typography variant='h5' component='h2'>
            {name}
          </Typography>
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
        staggerChildren: 2,
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
      <MotionStack
        variants={variants.parent}
        initial='hidden'
        animate='visible'
        spacing={1}
      >
        {data?.data.map(({ name, coverUrl, fileUrl }) => (
          <motion.div variants={variants.children} key={name}>
            <MusicPreview coverUrl={coverUrl} name={name} songUrl={fileUrl} />
          </motion.div>
        ))}
      </MotionStack>
    </Container>
  );
};

export default Playlist;
