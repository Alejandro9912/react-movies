import { useState, useEffect } from "react";

const useFavourite = () => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (movieName) => {
    console.log(`Favourite clicked from ${movieName}`);

    let newFavourites = [...(favourites || [])];

    if (!newFavourites.includes(movieName)) {
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

  return [favourites, addFavourite];
};
export default useFavourite;
