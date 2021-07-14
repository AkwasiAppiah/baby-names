import { BabyTileFunction } from "./components/SingleBabyTile";
import NamesList from '../src/babynames.json'

function App(): JSX.Element {
  return (<BabyTileFunction babyNames = {NamesList}/>)
}

export default App;
