import { SearchBabyNamesProps } from "../utils/Interface";

export const SearchBabyNames = ({
  search,
  setSearch,
  setSexFilter,
  stop,
  playLion,
  duration,
  playbackRate,
  setPlaybackRate,
  playSqueak,
  playallChildren,
}: SearchBabyNamesProps): JSX.Element => {
  const handleMaleButton = () => {
    setSexFilter("f");
    playLion();
    duration = 0.005;
  };

  const handleFemaleButton = () => {
    setSexFilter("m");
    setPlaybackRate(playbackRate + 0.1);
    playSqueak();
  };

  const handleAllChildrenButton = () => {
    setSexFilter("");
    playallChildren();
  };

  return (
    <div className="searchcontainer">
      <input
        placeholder="Search..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <button className="All" onClick={() => handleAllChildrenButton()}>
        <i className="fas fa-baby"></i>
      </button>
      <button className="boy" onClick={() => handleMaleButton()}>
        <i className="fas fa-male"></i>
      </button>
      <button className="girl" onClick={() => handleFemaleButton()}>
        <i className="fas fa-female"></i>
      </button>
      <button onClick={() => stop()}>mute</button>
    </div>
  );
};
