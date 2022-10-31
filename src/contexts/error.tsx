import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface Props {
  children: JSX.Element;
}

interface ErrorContext {
  error: null | string;
  setError: Dispatch<SetStateAction<string | null>>;
}

export const ErrorContext = createContext<ErrorContext>({
  error: null,
  setError: () => {},
});

export const ErrorProvider = (props: Props) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {props.children}
    </ErrorContext.Provider>
  );
};

export function useError() {
  const { error, setError } = useContext(ErrorContext);
  return { error, setError };
}
