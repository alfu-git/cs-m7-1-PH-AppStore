import React, { createContext } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

  const data = {}

  return <AppContext.Provider value={data}>
    {children}
  </AppContext.Provider>
};

export default AppContextProvider;