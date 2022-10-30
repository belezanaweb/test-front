import React, { createContext, useContext, useState } from "react";
import { useEventListener } from "usehooks-ts";

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
    if (width <= 768) {
      return windowSize.small;
    } else if (width > 768 && width <= 1024) {
      return windowSize.medium;
    } else if (width > 1024) {
      return windowSize.large;
    }
    return windowSize.default;
  };
  const [size, setSize] = useState<windowSize>(getWindowSize());

  useEventListener("resize", () => {
    setSize(getWindowSize());
  });

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
