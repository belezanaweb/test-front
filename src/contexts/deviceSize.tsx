import React, { createContext, useContext } from "react";

interface Props {
  children: JSX.Element;
}

enum windowSize {
  small = "small",
  medium = "medium",
  large = "large",
  default = "default",
}

export const DeviceSizeContext = createContext<string>("default");

export const DeviceSizeProvider = (props: Props) => {
  const getWindowSize = () => {
    const width = window.innerWidth;
    if (width <= 320) {
      return windowSize.small;
    } else if (width > 320 && width <= 425) {
      return windowSize.medium;
    } else if (width > 425) {
      return windowSize.large;
    }
    return windowSize.default;
  };
  const size: windowSize = getWindowSize();

  return (
    <DeviceSizeContext.Provider value={size}>
      {props.children}
    </DeviceSizeContext.Provider>
  );
};

export function useDeviceSize() {
  const context = useContext(DeviceSizeContext);
  return context;
}
