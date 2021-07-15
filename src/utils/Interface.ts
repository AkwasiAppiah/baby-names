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
