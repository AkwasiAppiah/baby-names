import { SingleBabyTileProps } from "../utils/Interface";

export const SingleBabyTile = ({
  babyName,
}: SingleBabyTileProps): JSX.Element => {
  return (
    <>
      <p>{babyName.name}</p>
    </>
  );
};
