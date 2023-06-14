import React, { createContext, useState, ReactElement } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (data: boolean) => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => { },
});

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated,] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
