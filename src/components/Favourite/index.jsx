import { useState } from "react";
const Favourite = ({displayFavourite}) => {
  const [fav, setFav] = useState(false)

  const handleClick = () => {
    setFav(!fav);
    displayFavourite();
  }
  return <button onClick={handleClick}> {fav? 'Stop showing me favourites':'Show favourites'}</button>
}

export default Favourite;