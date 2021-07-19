import { nameFilterProps } from "./Interface";

export function nameFilter({
  search,
  babyName,
  favourites,
  sexFilter,
}: nameFilterProps): boolean {
  return (
    babyName.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
    !favourites.includes(babyName) &&
    babyName.sex !== sexFilter
  );
}

// .filter(
//   (singlebaby: babyName) => !favourites.includes(singlebaby)
//   // nameFilter({
//   //   search: search,
//   //   babyName: singlebaby,
//   //   favourites: favourites,
//   //   sexFilter: sexFilter,
//   // })
// )
// .filter((singlebaby: babyName) =>
//   singlebaby.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
// )
// .filter((singleBaby) => singleBaby.sex !== sexFilter || "")
// .sort((a, b) => a.name.localeCompare(b.name));
