import { create } from "zustand";

interface PlayingMusicStore {
  src: string;
  image: string | null;
  title: string | null;
  setSrc: (src: string) => void;
  setImage: (image: string) => void;
  setTitle: (title: string) => void;
}

const usePlayingMusicStore = create<PlayingMusicStore>()((set, get) => ({
  src: "",
  image: null,
  title: null,
  setSrc: src => set(state => ({ src: `/${src}` })),
  setImage: image => set(state => ({ image })),
  setTitle: title => set(state => ({ title })),
}));

export default usePlayingMusicStore;
