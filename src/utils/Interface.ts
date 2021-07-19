import { PlayFunction } from "use-sound/dist/types";

export interface babyName {
  id: number;
  name: string;
  sex: string;
}

export interface SingleBabyTileProps {
  babyName: babyName;
}

export interface BabyNameDisplayerProps {
  babyNames: babyName[];
}

export interface SearchBabyNamesProps {
  search: string;
  setSearch(search: string): void;
  babyNames: babyName[];
  setSexFilter(sexFilter: string): void;
  stop: (id?: string | undefined) => void;
  playLion: PlayFunction;
  duration: number | null;
  playbackRate: number;
  setPlaybackRate(playbackRate: number): void;
  playSqueak: PlayFunction;
  playallChildren: PlayFunction;
  // soundProps: soundProps
}

export interface nameFilterProps {
  search: string;
  babyName: babyName;
  favourites: babyName[];
  sexFilter: string;
}

export interface soundProps {
  playLion: PlayFunction;
  stop: (id?: string | undefined) => void;
}
