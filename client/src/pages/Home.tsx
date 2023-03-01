import React from "react";
import MusicCard from "@/components/MusicCard";
import { Button, Container } from "@mui/material";
import GridList from "@/components/List";

const Home: React.FC = () => {
  return (
    <Container>
      <Button>test</Button>
      <GridList
        of={[
          {
            image:
              "https://upload.wikimedia.org/wikipedia/en/f/f6/Through_the_Fire_and_Flames_Cover_Art.jpg",
            title: "Through the fire and flames",
            artist: "Dragonforce",
          },
        ]}
      >
        {({ artist, image, title }) => (
          <MusicCard image={image} title={title} artist={artist} />
        )}
      </GridList>
    </Container>
  );
};

export default Home;
