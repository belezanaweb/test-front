import { HTMLAttributes } from "react";

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode | string;
  ["data-testid"]?: string | number;
}
