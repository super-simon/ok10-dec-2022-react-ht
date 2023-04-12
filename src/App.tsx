import "./App.css";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import Simpsons from "./components/Simpsons/Simpsons";
import { rickAndMortyCharacters } from "./data/rickAndMortyCharacters";
import { simpsonsCharacters } from "./data/simpsonsCaracters";

function App() {
  return (
    <div className="App">
      <Simpsons data={simpsonsCharacters} />
      <RickAndMorty data={rickAndMortyCharacters} />
    </div>
  );
}

export default App;
