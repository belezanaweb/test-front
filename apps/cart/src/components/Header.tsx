import { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const styles = tv({
  slots: {
    tabStyles: "flex justify-center items-center px-4",
    labelStyles: "text-zinc-500",
  },
  variants: {
    type: {
      isSelected: {
        tabStyles: "border-b-[4px] border-black",
        labelStyles: "text-black mt-1",
      },
    },
  },
});

type TabProps = {
  label: string;
  isSelected?: boolean;
};

function Tab({ label, isSelected }: TabProps) {
  const { tabStyles, labelStyles } = styles({
    type: isSelected ? "isSelected" : undefined,
  });

  return (
    <li className={tabStyles()}>
      <p className={labelStyles()}>{label}</p>
    </li>
  );
}

export type HeaderProps = HTMLAttributes<HTMLHeadingElement>;

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={twMerge(
        "h-10 bg-white shadow flex justify-center items-center shrink-0",
        className
      )}
      {...props}
    >
      <nav className="border-b border-zinc-500 h-full">
        <ul className="flex h-full">
          <Tab label="Sacola" isSelected />
          <Tab label="Pagamento" />
          <Tab label="Confirmação" />
        </ul>
      </nav>
    </header>
  );
}
