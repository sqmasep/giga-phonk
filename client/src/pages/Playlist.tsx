import { playlist, keys } from "@/lib/query/playlist";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

const Playlist: React.FC = () => {
  const { playlistId = "" } = useParams();
  const { data } = useQuery(keys.byId(playlistId), () =>
    playlist.byId(playlistId)
  );

  return <></>;
};

export default Playlist;
