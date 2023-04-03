import React from "react";
import MusicCard from "@/components/MusicCard";
import { Button, Container, Typography } from "@mui/material";
import GridList from "@/components/GridList";
import { useQuery } from "@tanstack/react-query";
import { songs } from "@/lib/query/songs";

const Home: React.FC = () => {
  const { data } = useQuery(songs.keys.all, songs.queries.all);
  return (
    <Container>
      <Typography variant='h2' component='h1' fontWeight={700} mb={4}>
        Musiques populaires
      </Typography>
      {data && (
        <GridList spacing={2} of={data.data} gridKey={item => item.id}>
          {({ artist, name, coverUrl, fileUrl }) => (
            <MusicCard
              image={coverUrl}
              title={name}
              artist={artist}
              songUrl={fileUrl}
            />
          )}
        </GridList>
      )}
    </Container>
  );
};

export default Home;
