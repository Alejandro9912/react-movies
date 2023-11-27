import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { list } = props;

  const handleCheckTime = (movieName) => {
    console.log(`Check time clicked from ${movieName}`);
  };
  return (
    <ul>
      {list.map((movie) => (
        // eslint-disable-next-line react/jsx-key
        <MovieCard name={movie.name} onCheckTimeClick={handleCheckTime} />
      ))}
    </ul>
  );
};

export default MovieList;
