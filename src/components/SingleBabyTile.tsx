import { SingleBabyTileProps } from "../utils/Interface"

export const SingleBabyTile = ({babyName}: SingleBabyTileProps): JSX.Element => {
    return (
        <>
        <h2>{babyName.name}</h2>
        </>
    )

}