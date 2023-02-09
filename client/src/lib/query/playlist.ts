import axios from "axios";

export const keys = {
  all: ["playlist"],
  byId: (playlistId: string) => [...keys.all, { playlistId }],
};

export const playlist = {
  byId: async (playlistId: string) => axios.get(`/playlist/${playlistId}`),
};
