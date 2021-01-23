import React from "react";
import Navigation from "./src/Navigation";
import { favoritesContext, useFavorites } from "./src/context/favorites";
import { recordsContext, useRecords } from "./src/context/records";
import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";

export default function App() {
  const storage = new Storage({
    storageBackend: AsyncStorage,
  });
  const ctxFavorites = useFavorites();
  const ctxRecords = useRecords();

  React.useEffect(() => {
    storage
      .load({
        key: "favorite",
        autoSync: true,
        syncInBackground: true,
      })
      .then((ret) => {
        ctxFavorites.setFavorites(ret);
      });

    storage
      .load({
        key: "records",
        autoSync: true,
        syncInBackground: true,
      })
      .then((ret) => {
        ctxRecords.setRecords(ret);
      });
  }, []);

  return (
    <favoritesContext.Provider value={ctxFavorites}>
      <Navigation />
    </favoritesContext.Provider>
  );
}
