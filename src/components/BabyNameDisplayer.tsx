import nameArr from "../babynames.json";
import { SingleBabyTile } from "./SingleBabyTile";
import { useState } from "react";
import { SearchBabyNames } from "./SearchBabyNames";
import { nameFilter } from "../utils/nameFilter";
import { babyName } from "../utils/Interface";

export const BabyNameDisplayer = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [favourites, setfavourites] = useState<babyName[]>([]);

  // PseudoCode
  // create an array of favourite names
  // On click add names to this array
  // display these names

  // have apply a filter which filters clicked names

  const filteredNames = nameArr
    .filter((singlebaby: babyName) =>
      nameFilter({ search, babyName: singlebaby, favourites })
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleAddToFavourites = (babyName: babyName) => {
    if (!favourites.includes(babyName)) {
      setfavourites([...favourites, babyName]);
    }
  };

  return (
    <>
      <SearchBabyNames
        search={search}
        setSearch={setSearch}
        babyNames={filteredNames}
      />

      <div className="tiles">
        {favourites.map((name) => (
          <div
            key={name.name}
            className="card favourites"
            onClick={() =>
              setfavourites([...favourites].filter((baby) => baby !== name))
            }
          >
            <SingleBabyTile key={name.id} babyName={name} />
          </div>
        ))}
      </div>

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
