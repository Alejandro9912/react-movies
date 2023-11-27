import Header from "./components/Header";
import MovieList from "./components/MovieList";
import "./App.css";

const latestMovies = [
  { name: "Avatar 2" },
  { name: "Matrix 4" },
  { name: "Thor" },
];

const childrenMovies = [
  { name: "Minions" },
  { name: "Alice in Wonderland" },
  { name: "Elements" },
];
function App() {
  return (
    <>
      <Header />
      <MovieList list={latestMovies} />
      <MovieList list={childrenMovies} />
    </>
  );
}

export default App;
