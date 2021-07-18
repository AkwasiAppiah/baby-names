import { SearchBabyNamesProps } from "../utils/Interface";

export const SearchBabyNames = ({
  search,
  setSearch,
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
    </div>
  );
};
