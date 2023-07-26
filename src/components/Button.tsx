import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  primary?: boolean;
  rounded?: boolean;
  position?: "start" | "center" | "end";
  full?: boolean;
}

function Button({
  children,
  primary,
  rounded,
  position = "center",
  full,
  ...rest
}: ButtonProps) {
  const positionClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  const mergedClasses = twMerge(
    rest.className,
    `button ${primary && "bg-green-500"} ${rounded && "rounded-full"} ${
      positionClasses[position]
    } ${full && "w-full"}`
  );

  return (
    <button {...rest} className={mergedClasses}>
      {children}
    </button>
  );
}

export default Button;
