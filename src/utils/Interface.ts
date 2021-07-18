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
}

export interface nameFilterProps {
  search: string;
  babyName: babyName;
  favourites: babyName[];
  sexFilter: string;
}

export interface soundProps {
  playLion: void;
}
