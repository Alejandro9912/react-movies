import Header from "./components/Header";
import MovieList from "./components/MovieList";
import "./App.css";

const latestMovies = [
  { name: "Avatar 2" },
  { name: "Matrix 4" },
  { name: "Thor" },
];

function App() {
  return (
    <>
      <Header />
      <MovieList list={latestMovies} />
    </>
  );
}

export default App;
