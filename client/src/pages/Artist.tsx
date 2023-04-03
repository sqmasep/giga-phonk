import GridList from "@/components/GridList";
import MusicCard from "@/components/MusicCard";
import { artists } from "@/lib/query/artists";
import { Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Artist: React.FC = () => {
  const { artistName = "" } = useParams();
  const { data } = useQuery(
    artists.keys.byName(artistName),
    artists.queries.byName(artistName)
  );
  return (
    <Container>
      <Typography variant='h2' component='h1' fontWeight={900}>
        {artistName}
      </Typography>

      <Typography variant='h3' component='h2' mt={4}>
        Ses musiques
      </Typography>
      {data && (
        <GridList mt={2} spacing={2} of={data.data} gridKey={item => item.id}>
          {({ coverUrl, fileUrl, name }) => (
            <MusicCard image={coverUrl} songUrl={fileUrl} title={name} />
          )}
        </GridList>
      )}
    </Container>
  );
};

export default Artist;
