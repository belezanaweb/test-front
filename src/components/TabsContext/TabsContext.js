import { createContext, useContext } from 'react';

const TabsContext = createContext(null);

export default TabsContext;

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  return context;
};
