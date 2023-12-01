import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { list } = props;
  const [favourites, setFavourites] = useState([]);

  const handleCheckTime = (movieName) => {
    console.log(`Favourite clicked from ${movieName}`);

    let newFavourites = [...favourites];

    if (!favourites.includes(movieName)) {
      newFavourites = [...newFavourites, movieName];
    } else {
      newFavourites = newFavourites.filter((movie) => movieName != movie);
    }

    setFavourites(newFavourites);

    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("favourites");
    const storedFavourites = JSON.parse(localStorageData);

    setFavourites(storedFavourites);
  }, []);

  console.log({ favourites });

  return (
    <ul>
      {list.map((movie) => (
        <MovieCard
          key={movie.name}
          name={movie.name}
          onCheckTimeClick={handleCheckTime}
          isFavourite={favourites.includes(movie.name)}
        />
      ))}
    </ul>
  );
};

export default MovieList;
