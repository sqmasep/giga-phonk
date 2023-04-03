import GridList from "@/components/GridList";
import { formatToNow } from "@/lib/date/format";
import { playlists } from "@/lib/query/playlists";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Playlists: React.FC = () => {
  const { data } = useQuery(playlists.keys.all, playlists.queries.all);

  return (
    <Container>
      <Typography variant='h2' component='h1'>
        Playlists du moment
      </Typography>

      {data && (
        <GridList mt={4} spacing={2} of={data.data} gridKey={item => item.id}>
          {({ name, updated_at, id }) => (
            <Card>
              <CardActionArea
                sx={{ p: 2 }}
                component={Link}
                to={`/playlists/${id}`}
              >
                <CardContent>
                  <Typography variant='h5' component='h2'>
                    {name}
                  </Typography>
                  <Typography variant='caption' color='gray'>
                    Modifié il y a {formatToNow(new Date(updated_at))}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )}
        </GridList>
      )}
    </Container>
  );
};
export default Playlists;
