export interface Song {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  fileUrl: string;
  coverUrl: string;
  artist: string;
}

export interface Playlist {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  official: number;
  playlistCover?: string;
}
