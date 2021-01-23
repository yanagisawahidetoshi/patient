import React from "react";
import { FavoritesModel } from "../model/favoriteModel";

type FavoritesContext = {
  favorites: Array<FavoritesModel>;
  setFavorites: (params: Array<FavoritesModel>) => void;
};

const defaultContext: FavoritesContext = {
  favorites: [],
  setFavorites: () => {},
};

export const favoritesContext = React.createContext<FavoritesContext>(
  defaultContext
);

export const useFavorites = (): FavoritesContext => {
  const [favorites, setData] = React.useState<Array<FavoritesModel>>([]);

  const setFavorites = React.useCallback(
    (current: Array<FavoritesModel>): void => {
      setData(current);
    },
    []
  );
  return {
    favorites,
    setFavorites,
  };
};
