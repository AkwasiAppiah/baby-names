import { SingleBabyTileProps } from "../utils/Interface";

export const SingleBabyTile = ({
  babyName,
}: SingleBabyTileProps): JSX.Element => {
  return (
    <div className = {babyName.sex === "m" ? "card boy": "card girl"}  >
      <p>{babyName.name}</p>
    </div>
  );
};
