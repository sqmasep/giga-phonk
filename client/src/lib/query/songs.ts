import { axios } from "./common";
import { Song } from "./db";

const keys = {
  all: ["songs"],
};

const queries = {
  all: () => axios.get<Song[]>("/songs"),
};

export const songs = { keys, queries };
