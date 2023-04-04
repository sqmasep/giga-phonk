import { axios } from "./common";
import { Song } from "./db";

const keys = {
  all: ["artists"],
  byName: (name: string) => [...keys.all, name],
};

const queries = {
  all: () => axios.get("/songs/artist"),
  byName: (name: string) => () => axios.get<Song[]>(`/songs/artist/${name}`),
};

export const artists = { keys, queries };
