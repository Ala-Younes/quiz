import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className="button">
      {children}
    </button>
  );
}

export default Button;
