import nameArr from "../babynames.json";
import { SingleBabyTile } from "./SingleBabyTile";
import { useState } from "react";
import { SearchBabyNames } from "./SearchBabyNames";
//import { nameFilter } from "../utils/nameFilter";
import { babyName } from "../utils/Interface";
import useSound from "use-sound";
// @ts-expect-error : audio issue
import lionRoar from "../sounds/lionRoar.mp3";

export const BabyNameDisplayer = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [favourites, setfavourites] = useState<babyName[]>([]);
  const [sexFilter, setsexFilter] = useState<string>("");
  const [playLion, { stop }] = useSound(lionRoar);

  // PseudoCode
  // create an array of favourite names
  // On click add names to this array
  // display these names

  // have apply a filter which filters clicked names

  const filteredNames = nameArr
    .filter(
      (singlebaby: babyName) => !favourites.includes(singlebaby)
      // nameFilter({
      //   search: search,
      //   babyName: singlebaby,
      //   favourites: favourites,
      //   sexFilter: sexFilter,
      // })
    )
    .filter((singlebaby: babyName) =>
      singlebaby.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
    .filter((singleBaby) => singleBaby.sex !== sexFilter || "")
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleAddToFavourites = (babyName: babyName) => {
    if (!favourites.includes(babyName)) {
      setfavourites([...favourites, babyName]);
    }
  };

  console.log(search);
  console.log(sexFilter);
  console.log(favourites);

  return (
    <>
      <SearchBabyNames
        search={search}
        setSearch={setSearch}
        babyNames={filteredNames}
        setSexFilter={setsexFilter}
      />

      <div className="tiles">
        <div className="tiles text">Favourites:</div>
        {favourites.map((name) => (
          <div
            key={name.name}
            className="card favourites"
            onMouseEnter={() => playLion()}
            onMouseLeave={() => stop()}
            onClick={() =>
              setfavourites([...favourites].filter((baby) => baby !== name))
            }
          >
            <SingleBabyTile key={name.id} babyName={name} />
          </div>
        ))}
      </div>

      <hr />

      <div className="tiles" key="tiles">
        {filteredNames.map((name) => (
          <div key={name.id} onClick={() => handleAddToFavourites(name)}>
            <SingleBabyTile key={name.id} babyName={name} />
          </div>
        ))}
      </div>
    </>
  );
};
