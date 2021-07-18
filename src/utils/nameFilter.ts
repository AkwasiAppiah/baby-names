import { nameFilterProps } from "./Interface";

export function nameFilter({
  search,
  babyName,
  favourites,
  sexFilter,
}: nameFilterProps): boolean {
  return (
    babyName.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    !favourites.includes(babyName) ||
    babyName.sex !== sexFilter
  );
}
