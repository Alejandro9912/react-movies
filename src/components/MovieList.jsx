import MovieCard from "./MovieCard";
import useFavourite from "../hooks/useFavourite";

const MovieList = (props) => {
  const { list } = props;
  const [favourites, addFavourite] = useFavourite();

  const handleFavouriteClick = (movieName) => {
    addFavourite(movieName);
  };

  return (
    <ul>
      {list.map((movie) => (
        <MovieCard
          key={movie.name}
          name={movie.name}
          onCheckTimeClick={handleFavouriteClick}
          isFavourite={favourites && favourites.includes(movie.name)}
        />
      ))}
    </ul>
  );
};

export default MovieList;
