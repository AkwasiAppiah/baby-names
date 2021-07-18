import nameArr from "../babynames.json";
import { SingleBabyTile } from "./SingleBabyTile";
import { useState } from "react";
import { SearchBabyNames } from "./SearchBabyNames";
import { nameFilter } from "../utils/nameFilter";
import { babyName } from "../utils/Interface";

export const BabyNameDisplayer = (): JSX.Element => {
  const [search, setSearch] = useState("");
  

  let searchNames: babyName[] = [];

  const sortedNames: babyName[] = nameArr.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  searchNames = nameFilter({ search, babyNames: sortedNames });

  // PseudoCode
  // create an array of favourite names 
  // On click add names to this array
      // display these names
  
  // have apply a filter which filters clicked names


  return (
    <>
      <SearchBabyNames
        search={search}
        setSearch={setSearch}
        babyNames={searchNames}
      />
      <div className="tiles" key="tiles">
        {searchNames.map((name) =>
          name.sex === "m" ? (
            <div className="card boy" key={name.name}>
              <SingleBabyTile key="singleBabyboy" babyName={name} />
            </div>
          ) : (
            <div className="card girl" key={name.name}>
              <SingleBabyTile key="singleBabyGirl" babyName={name} />
            </div>
          )
        )}
      </div>
    </>
  );
};
