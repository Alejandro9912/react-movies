const MovieCard = (props) => {
  const { name, onCheckTimeClick } = props;

  const handleClick = () => {
    console.log(`Time for ${name}`);
    onCheckTimeClick(name);
  };
  return (
    <li>
      <article>
        <h3>{name}</h3>
        <button onClick={handleClick}>Check Times</button>
      </article>
    </li>
  );
};

export default MovieCard;
