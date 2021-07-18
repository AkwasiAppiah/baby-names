import { nameFilterProps } from "./Interface";

export function nameFilter({
  search,
  babyName,
  favourites,
}: nameFilterProps): boolean {
  return (
    babyName.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    !favourites.includes(babyName)
  );
}

// import { IEpisode, searchFunctionProps } from "./Interfaces";

// export function searchFunction({
//   search,
//   episodes,
// }: searchFunctionProps): IEpisode[] {
//   return episodes.filter(
//     (episode) =>
//       episode.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
//       episode.summary.toLocaleLowerCase().includes(search.toLocaleLowerCase())
//   );
// }
