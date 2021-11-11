import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteInternship) => {},
  removeFavorite: (internshipId) => {},
  itemIsFavorite: (internshipId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteInternship) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteInternship);
    });
  }

  function removeFavoriteHandler(internshipId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(
        (internship) => internship.id !== internshipId
      );
    });
  }

  function itemIsFavoriteHandler(internshipId) {
    return userFavorites.some((internship) => internship.id === internshipId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
