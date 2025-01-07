import React, { createContext, useContext } from "react";
import { DataProviderProps } from "../types";
import { useGetAllSections } from "../hooks/useGetAllSections";

const DataContext = createContext<any>(null);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const { isDataFetching, data } = useGetAllSections({
    enabled: true,
    queryKey: ["sections"],
  });
  return (
    <DataContext.Provider value={{ data, isDataFetching }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
