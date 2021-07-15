import nameArr from "../babynames.json";
import { SingleBabyTile } from "./SingleBabyTile";

export const BabyNameDisplayer = (): JSX.Element => {
  return (
    <>
      <div className="tiles" key="tiles">
        {nameArr.map((name) =>
          name.sex === "m" ? (
            <div className="card boy" key = {name.name}>
              <SingleBabyTile key= 'singleBabyboy' babyName={name} />
            </div>
          ) : (
            <div className="card girl" key = {name.name}>
              <SingleBabyTile key="singleBabyGirl" babyName={name} />
            </div>
          )
        )}
      </div>
    </>
  );
};
