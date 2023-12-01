const MovieCard = (props) => {
  const { name, onCheckTimeClick, isFavourite } = props;

  const handleClick = () => {
    console.log(`Time for ${name}`);
    onCheckTimeClick(name);
  };
  return (
    <li>
      <article>
        <h3>{name}</h3>
        <button onClick={handleClick}>{isFavourite ? "❤️" : "🖤"}</button>
      </article>
    </li>
  );
};

export default MovieCard;
