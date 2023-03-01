import axios from "axios";

export const keys = {
  all: ["users"] as const,
  byId: (id: string) => [...keys.all, { id }] as const,
  songs: (userId: string) => [...keys.byId(userId), "songs"] as const,
};

export const users = {
  byId: (id: string) => axios.get(`/users/${id}`),
  allSongs: (userId: string) => axios.get("/users/songs"),
};
