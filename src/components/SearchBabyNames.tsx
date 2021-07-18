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
        <i className="fas fa-baby"></i>
      </button>
      <button className="boy" onClick={() => setSexFilter("f")}>
        <i className="fas fa-male"></i>
      </button>
      <button className="girl" onClick={() => setSexFilter("m")}>
        <i className="fas fa-female"></i>
      </button>
    </div>
  );
};
