import { axios } from "./common";
import { Playlist, Song } from "./db";

const keys = {
  all: ["playlists"],
  byId: (playlistId: string) => [...keys.all, { playlistId }],
};

const queries = {
  all: () => axios.get<Playlist[]>("/playlists"),
  byId: (playlistId: string) => () =>
    axios.get<Song[]>(`/playlists/${playlistId}/songs`),
};

export const playlists = { keys, queries };
