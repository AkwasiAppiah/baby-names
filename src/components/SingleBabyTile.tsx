import { SingleBabyTileProps } from "../utils/Interface"

export const BabyTileFunction = ({babyName}: SingleBabyTileProps): JSX.Element => {
    return (
        <>
        <h2>{babyName.name}</h2>
        </>
    )

}