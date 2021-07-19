import nameArr from "../babynames.json";
import { SingleBabyTile } from "./SingleBabyTile";
import { useState } from "react";
import { SearchBabyNames } from "./SearchBabyNames";
import { nameFilter } from "../utils/nameFilter";
import { babyName } from "../utils/Interface";
import useSound from "use-sound";
// global.ds.ts declare module "*.mp3"
import lionRoar from "../sounds/lionRoar.mp3";
import soundurl from "../sounds/glug-a.wav";
import allChildren from "../sounds/allSounds.wav";

export const BabyNameDisplayer = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [favourites, setfavourites] = useState<babyName[]>([]);
  const [sexFilter, setsexFilter] = useState<string>("");
  const [playLion, { duration }] = useSound(lionRoar);
  const [playbackRate, setPlaybackRate] = useState(0.75);
  const [playSqueak] = useSound(soundurl, { playbackRate, volume: 0.5 });
  const [playallChildren, { stop }] = useSound(allChildren);

  // PseudoCode
  // create an array of favourite names
  // On click add names to this array
  // display these names

  // have apply a filter which filters clicked names

  const filteredNames = nameArr.filter((singlebaby) =>
    nameFilter({
      search: search,
      babyName: singlebaby,
      favourites: favourites,
      sexFilter: sexFilter,
    })
  );

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
        setSexFilter={setsexFilter}
        stop={stop}
        playLion={playLion}
        duration={duration}
        playbackRate={playbackRate}
        setPlaybackRate={setPlaybackRate}
        playSqueak={playSqueak}
        playallChildren={playallChildren}
      />

      <div className="tiles">
        <div className="tiles text">Favourites:</div>
        {favourites.map((name) => (
          <div
            key={name.name}
            className="card favourites"
            // onMouseEnter={() => playLion()}
            // onMouseLeave={() => stop()}
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
