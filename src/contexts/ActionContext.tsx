import React, { createContext, useState, ReactElement } from 'react';

type ActionContextType = {
  actionElement: ReactElement | null;
  setActionElement: (actionElement: ReactElement | null) => void;
};

const ActionContext = createContext<ActionContextType>({
  actionElement: null,
  setActionElement: () => { },
});

type ActionContextProviderProps = {
  children: React.ReactNode;
};

const ActionContextProvider: React.FC<ActionContextProviderProps> = ({ children }) => {
  const [actionElement, setActionElement] = useState<ReactElement | null>(null);

  return (
    <ActionContext.Provider value={{ actionElement, setActionElement }}>
      {children}
    </ActionContext.Provider>
  );
};

export { ActionContext, ActionContextProvider };
