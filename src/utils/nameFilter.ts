import { babyName,nameFilterProps } from "./Interface";


export function nameFilter({search,babyNames}:nameFilterProps): babyName [] {
    return babyNames.filter(
        (name) => name.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
        // || favouritesArray.toLocaleLowerCase().includes(name.name)
    )
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
