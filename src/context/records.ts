import React from "react";
import { RecordsModel } from "../model/recordsModel";

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
  }, []);
  return {
    records,
    setRecords,
  };
};
