import React, { createContext, useState, ReactElement } from 'react';
import { SummaryDataType } from '../components/summary/models';

type ActionContextType = {
  summary: SummaryDataType | null;
  setSummary: (data: SummaryDataType | null) => void;
  actionElement: ReactElement | null;
  setActionElement: (actionElement: ReactElement | null) => void;
};

const ActionContext = createContext<ActionContextType>({
  actionElement: null,
  setActionElement: () => { },
  summary: null,
  setSummary: () => { }
});

type ActionContextProviderProps = {
  children: React.ReactNode;
};

const ActionContextProvider: React.FC<ActionContextProviderProps> = ({ children }) => {
  const [actionElement, setActionElement,] = useState<ReactElement | null>(null);
  const [summary, setSummary] = useState<SummaryDataType | null>(null);

  return (
    <ActionContext.Provider value={{ actionElement, setActionElement, summary, setSummary }}>
      {children}
    </ActionContext.Provider>
  );
};

export { ActionContext, ActionContextProvider };
