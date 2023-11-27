import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { list } = props;
  return (
    <ul>
      {list.map((movie) => (
        // eslint-disable-next-line react/jsx-key
        <MovieCard name={movie.name} />
      ))}
    </ul>
  );
};

export default MovieList;
