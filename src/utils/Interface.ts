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
  setSearch(search:string): void;
  babyNames: babyName[]
}

export interface nameFilterProps{
  search: string;
  babyNames: babyName []
}
