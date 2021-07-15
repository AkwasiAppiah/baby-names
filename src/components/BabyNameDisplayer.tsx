import nameArr from "../babynames.json";
import { SingleBabyTile } from "./SingleBabyTile";

export const BabyNameDisplayer = (): JSX.Element => {
  return (
    <>
      {nameArr.map(
        (name) => 
          name.sex === "m" ? (
            <SingleBabyTile key="singleBabyBoy" babyName={name} />
          ):(
            <SingleBabyTile key="singleBabyGirl" babyName={name} />
          )
      )}
    </>
  );
};
