import React, { createContext, Dispatch, useState } from "react"

interface HeaderData {
  activeItem: number;
  setActiveItem: Dispatch<React.SetStateAction<number>>;
}

interface HeaderContextProvider {
  children: React.ReactNode;
}

export const HeaderContext = createContext({ activeItem: 1 } as HeaderData);

export const HeaderContextProvider = ({ children }: HeaderContextProvider) => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <HeaderContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </HeaderContext.Provider>
  );
}