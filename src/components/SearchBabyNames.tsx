import { SearchBabyNamesProps } from "../utils/Interface";

export const SearchBabyNames = ({
  search,
  setSearch,
  setSexFilter,
}: SearchBabyNamesProps): JSX.Element => {
  return (
    <div className="searchcontainer">
      <input
        placeholder="Search..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <button className="All" onClick={() => setSexFilter("")}>
        All
      </button>
      <button className="Boy" onClick={() => setSexFilter("f")}>
        Boy
      </button>
      <button className="Girl" onClick={() => setSexFilter("m")}>
        Girl
      </button>
    </div>
  );
};
