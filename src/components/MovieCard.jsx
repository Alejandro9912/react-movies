const MovieCard = (props) => {
  const { name } = props;
  return (
    <li>
      <article>
        <h3>{name}</h3>
        <button>Check Times</button>
      </article>
    </li>
  );
};

export default MovieCard;
