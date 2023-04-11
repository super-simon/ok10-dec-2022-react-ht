import "./App.css";
import RickAndMortyItem from "./components/RickAndMortyItem";
import SimpsonsItem from "./components/SimpsonsItem";
import { rickAndMortyCharacters } from "./data/rickAndMortyCharacters";
import { simpsonsCharacters } from "./data/simpsonsCaracters";

function App() {
  return (
    <div className="App">
      <h2>Simpsons</h2>
      <div>
        <ul className="character__list">
          {simpsonsCharacters.map((character) => (
            <li className="character">
              <SimpsonsItem character={character} />
            </li>
          ))}
        </ul>
      </div>
      <h2>Rick And Morty</h2>
      <div>
        <ul className="character__list">
          {rickAndMortyCharacters.map((character) => (
            <li className="character">
              <RickAndMortyItem character={character} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
