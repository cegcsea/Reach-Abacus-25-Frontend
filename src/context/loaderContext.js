import React, { useState, useContext } from "react";

//Context
export const LoaderContext = React.createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
export const LoaderData = () => useContext(LoaderContext);
