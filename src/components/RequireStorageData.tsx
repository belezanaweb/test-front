import localforage from "localforage";
import { ReactElement, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

type RequireStorageDataType = {
  children: ReactElement
}

const RequireStorageData = ({ children }: RequireStorageDataType) => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

export { RequireStorageData }
