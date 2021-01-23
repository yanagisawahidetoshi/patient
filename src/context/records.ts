import React from "react";
import { RecordsModel } from "../model/recordsModel";
import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";

type RecordsContext = {
  records: Array<RecordsModel>;
  setRecords: (params: Array<RecordsModel>) => void;
};

const defaultContext: RecordsContext = {
  records: [],
  setRecords: () => {},
};

export const recordsContext = React.createContext<RecordsContext>(
  defaultContext
);

export const useRecords = (): RecordsContext => {
  const [records, setData] = React.useState<Array<RecordsModel>>([]);

  const setRecords = React.useCallback((current: Array<RecordsModel>): void => {
    setData(current);
    const storage = new Storage({
      storageBackend: AsyncStorage,
    });
    storage.save({
      key: "records",
      data: [...current],
    });
  }, []);
  return {
    records,
    setRecords,
  };
};
