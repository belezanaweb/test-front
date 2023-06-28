import { HTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const styles = tv({
  base: "h-12 px-2 py-4 rounded font-bold leading-none text-base w-full flex justify-center items-center",
  variants: {
    color: {
      primary: "bg-purple-600 text-white",
      secondary: "bg-black text-white",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type ButtonVariants = VariantProps<typeof styles>;
export type ButtonProps = HTMLAttributes<HTMLButtonElement> & ButtonVariants;

export function Button({ className, color, ...props }: ButtonProps) {
  return (
    <button
      className={styles({
        className,
        color,
      })}
      type="button"
      {...props}
    />
  );
}
